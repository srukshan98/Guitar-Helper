import { UserDataModel } from './../../model/user-data.model';
import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { UserModel } from '../../model/user.model';
import { UserService } from '../api/user.service';


@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
    constructor(private authService: AuthenticationService, private router: Router, private userService: UserService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return new Observable((subscriber: Subscriber<boolean>) => {
            this.authService.loggedUser.subscribe((user: UserModel) => {
                if (user == null) {
                    this.authService.signIn().subscribe();
                } else if (route.data?.isAdmin) {
                    this.userService.getUserById(user.uid).subscribe((userData: UserDataModel | null) => {
                        if (userData == null || !userData.Admin) {
                            this.router.navigateByUrl('/home');
                        }
                        subscriber.next(userData != null && userData.Admin);
                        subscriber.complete();
                    });
                    return;
                }
                subscriber.next(user != null);
                subscriber.complete();
            });
            return subscriber;
        });
    }

}
