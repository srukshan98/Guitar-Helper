import { GenericDashboardService } from './../../generics/generic-dashboard-service.interface';
import { ItemModel } from 'src/app/model/item.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { StoreService } from './../util/store.service';
import { Injectable } from "@angular/core";
import { DocumentReference } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})
export class ItemService implements GenericDashboardService<ItemModel> {
    constructor(private storeService: StoreService) {}

    list(): Observable<any[]> {
        return this.storeService.getCollectionSnapshot('item', undefined);
    }

    addItem(data: ItemModel): Observable<DocumentReference<any>> {
        return this.storeService.addToCollection('item', data);
    }

    updateItem(data: ItemModel): Observable<void> {
        return this.storeService.updateCollection('item', data.Id, data);
    }

    deleteItem(id: string): Observable<void> {
        return this.storeService.deleteCollection('item', id);
    }
}
