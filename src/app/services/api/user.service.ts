import { UserDataModel } from './../../model/user-data.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { StoreService } from './../util/store.service';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private storeService: StoreService) {}

    getUserById(id: string): Observable<UserDataModel | null> {
        return this.storeService.getById('user', id);
    }

    listUsers(): Observable<any[]> {
        return this.storeService.getCollectionSnapshot('user', undefined);
    }

    updateUser(data: UserDataModel): Observable<void> {
        return this.storeService.updateCollection('user', data.Id, data);
    }

    deleteUser(id: string): Observable<void> {
        return this.storeService.deleteCollection('user', id);
    }
}
