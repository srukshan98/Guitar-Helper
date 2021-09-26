import { AuthenticationService } from './../../services/util/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    template: ''
})
export class LogoutComponent implements OnInit {
    constructor(private authService: AuthenticationService, private router: Router) {}

    ngOnInit(): void {
        this.router.navigateByUrl('redirect/home');
        setTimeout(() => this.authService.signOut(), 700);
    }
}
