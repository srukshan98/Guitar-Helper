import { GenericDashboardService } from './../../generics/generic-dashboard-service.interface';
import { TeamModel } from '../../model/team.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { StoreService } from './../util/store.service';
import { Injectable } from "@angular/core";
import { DocumentReference } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})
export class TeamService implements GenericDashboardService<TeamModel> {
    constructor(private storeService: StoreService) {}

    list(): Observable<any[]> {
        return this.storeService.getCollectionSnapshot('team', undefined);
    }

    addTeam(data: TeamModel): Observable<DocumentReference<any>> {
        return this.storeService.addToCollection('team', data);
    }

    updateTeam(data: TeamModel): Observable<void> {
        return this.storeService.updateCollection('team', data.Id, data);
    }

    deleteTeam(id: string): Observable<void> {
        return this.storeService.deleteCollection('team', id);
    }
}
