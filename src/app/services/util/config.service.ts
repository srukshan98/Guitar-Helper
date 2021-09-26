import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    getSquaredMemberCount(): number {
        const memberCount: number = environment.memberCount;
        let count = 9;
        let i = 3;
        while (count < memberCount) {
            i += 2;
            count = i ** 2;
        }
        return count;
    }
}