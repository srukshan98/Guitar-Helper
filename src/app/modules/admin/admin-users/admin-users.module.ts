import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminUsersRoutingModule } from './admin-users-routing.module';
import { AdminUsersComponent } from './admin-users.component';


@NgModule({
  declarations: [
    AdminUsersComponent
  ],
  imports: [
    CommonModule,
    AdminUsersRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatButtonToggleModule
  ]
})
export class AdminUsersModule { }
