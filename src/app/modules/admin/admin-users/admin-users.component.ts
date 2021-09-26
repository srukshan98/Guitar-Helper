import { UserService } from './../../../services/api/user.service';
import { UserDataModel } from './../../../model/user-data.model';
import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {
  dataSource: Observable<UserDataModel[]>;
  displayColumns: string[] = ['Email', 'LoggedOn', 'Admin'];
  dataChanges$: BehaviorSubject<void> = new BehaviorSubject<void>(undefined);

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.dataSource = this.dataChanges$.pipe(
      switchMap(() => this.userService.listUsers().pipe(
        catchError((err: any) => {
          console.error('User Load Error', err);
          return of([]);
        })
      )),
      map((users: UserDataModel[]) => users.map((user: UserDataModel) => ({...user, LoggedOn: (user.LoggedOn as any).toDate()})) ?? []),
    );
  }

  onAdminChange(user: UserDataModel, value: boolean): void {
    user.Admin = value;
    this.userService.updateUser(user);
  }
}
