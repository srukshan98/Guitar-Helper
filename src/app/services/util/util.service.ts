import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UtilService {
    ConvertPromiseToObservarable<T>(promise: Promise<T>): Observable<T> {
        return new Observable((s) => {
            promise.then((...a) => {
                s.next(...a);
                s.complete();
            });
            return s;
        });
    }
}
