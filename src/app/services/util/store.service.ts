import { UserDataModel } from './../../model/user-data.model';
import { UtilService } from './util.service';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreCollectionGroup, CollectionReference, DocumentChangeAction, DocumentReference, QuerySnapshot } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserModel } from 'src/app/model/user.model';

@Injectable({
    providedIn: 'root'
})
export class StoreService<T = any> {
    constructor(private store: AngularFirestore, private utilService: UtilService) {}

    getCollectionValueChanges(item: string, query: any): Observable<T[]> {
        return this.store.collection<T>(item, query).valueChanges();
    }

    addToCollection(item: string, data: T): Observable<DocumentReference<T>> {
        return this.utilService.ConvertPromiseToObservarable(this.store.collection<T>(item).add(data));
    }

    updateCollection(item: string, id: string, data: T): Observable<void> {
        return this.utilService.ConvertPromiseToObservarable(this.store.collection<T>(item).doc(id).set(data));
    }

    getCollectionSnapshot(item: string, query: any): Observable<any[]> {
        return this.store.collection<T>(item, query).snapshotChanges().pipe(map(MapToEntityWithId));
    }
    
    getCollection(item: string): AngularFirestoreCollection<T> {
        return this.store.collection<T>(item);
    }

    deleteCollection(item: string, id: string): Observable<void> {
        return this.utilService.ConvertPromiseToObservarable(this.store.collection<T>(item).doc(id).delete());
    }
    
    getById(item: string, id: string): Observable<T> {
        return this.store.collection<T>(item).doc(id).get().pipe(map(s => s.data()));
    }
}

const MapToEntityWithId = (actions: DocumentChangeAction<any>[]) => actions.map(a => ({ Id: a.payload.doc.id, ...a.payload.doc.data() }));
