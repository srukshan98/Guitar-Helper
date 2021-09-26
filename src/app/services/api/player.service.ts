import { GenericDashboardService } from './../../generics/generic-dashboard-service.interface';
import { PlayerModel } from '../../model/player.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { StoreService } from './../util/store.service';
import { Injectable } from "@angular/core";
import { DocumentReference } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})
export class PlayerService implements GenericDashboardService<PlayerModel> {
    constructor(private storeService: StoreService) {}

    list(): Observable<any[]> {
        return this.storeService.getCollectionSnapshot('player', undefined);
    }

    addPlayer(data: PlayerModel): Observable<DocumentReference<any>> {
        return this.storeService.addToCollection('player', data);
    }

    updatePlayer(data: PlayerModel): Observable<void> {
        return this.storeService.updateCollection('player', data.Id, data);
    }

    deletePlayer(id: string): Observable<void> {
        return this.storeService.deleteCollection('player', id);
    }
}
