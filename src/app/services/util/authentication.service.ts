import { UserDataModel } from './../../model/user-data.model';
import { UserModel } from './../../model/user.model';
import { StoreService } from './store.service';
import { UtilService } from './util.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Router } from '@angular/router';
import { AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    loggedUser: Observable<UserModel> = this.fireAuth.user;
    loggingIn = false;

    constructor(
        private fireAuth: AngularFireAuth,
        private utilService: UtilService,
        private router: Router,
        private storeService: StoreService
    ) { }

    signIn(): Observable<void> {
        if (this.loggingIn) {
            return of();
        } else {
            console.log('log',this.loggingIn);
            this.loggingIn = true;
        }
        return new Observable(ref => {
            // Using a popup.
            const provider = new firebase.auth.GoogleAuthProvider();
            this.utilService.ConvertPromiseToObservarable(firebase.auth().signInWithPopup(provider)).subscribe((result) => {
                // This gives you a Google Access Token.
                const providerId = result.credential.providerId;
                // The signed-in user info.
                const user = result.user;

                const userCollection: AngularFirestoreCollection<UserDataModel> = this.storeService.getCollection('user');
                userCollection.doc(user.uid).get().pipe(map(s => s.data())).subscribe((existingUser: UserDataModel) => {
                    let promise: Promise<any>;
                    if (existingUser) {
                        promise = userCollection.doc(user.uid).update({
                            LoggedOn: new Date()
                        });
                    } else {
                        promise = userCollection.doc(user.uid).set({
                            Email: user.email,
                            ProviderId: providerId,
                            LoggedOn: new Date(),
                            Admin: false,
                            Id: user.uid
                        });
                    }
                    this.utilService.ConvertPromiseToObservarable(promise).subscribe(() => {
                        location.reload();
                        ref.next();
                        ref.complete();
                        this.loggingIn = false;
                    }, () => this.loggingIn = false);
                }, () => this.loggingIn = false);
            }, () => this.loggingIn = false);
        });
    }

    signOut(): Observable<void> {
        return this.utilService.ConvertPromiseToObservarable(this.fireAuth.signOut());
    }
}
