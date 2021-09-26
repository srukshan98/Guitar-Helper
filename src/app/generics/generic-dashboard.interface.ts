import { Observable, BehaviorSubject } from 'rxjs';

export interface GenericDashboardInterface<T, X = void> {
    dataSource: Observable<T[]>;
    displayColumns: string[];
    dataChanges$: BehaviorSubject<X | void>;

    loadData(): void;
}
