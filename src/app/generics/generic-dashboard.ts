import { Observable, BehaviorSubject, of, ObservableInput } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';
import { GenericDashboardService } from './generic-dashboard-service.interface';
import { GenericDashboardInterface } from './generic-dashboard.interface';

export abstract class GenericDashboard<T, X = void> implements GenericDashboardInterface<T, X> {
    dataSource: Observable<T[]>;
    displayColumns: string[] = [];
    dataChanges$: BehaviorSubject<X | void> = new BehaviorSubject<X | void>(undefined);

    constructor(public service: GenericDashboardService<T>) { }

    loadData(errorMessage: string = 'Generic Loading Error'): void {
        this.dataSource = this.dataChanges$.pipe(
            switchMap((filter: any) => this.service.list(filter).pipe(
              catchError(((err: any) => {
                console.error(errorMessage, err);
                return of([]);
              }))
            )),
            map((items: T[]) => items ?? []),
          );
    }
}