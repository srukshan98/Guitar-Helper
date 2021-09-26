import { Observable } from 'rxjs';

export interface GenericDashboardService<T, X = void> {
    list(filter: X): Observable<T[]>;
}