import { DialogModule } from './../../../shared/module/dialog/dialog.module';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPlayersRoutingModule } from './admin-players-routing.module';
import { AdminPlayersComponent } from './admin-players.component';
import { AdminPlayerViewComponent } from './admin-player-view/admin-player-view.component';


@NgModule({
  declarations: [
    AdminPlayersComponent,
    AdminPlayerViewComponent
  ],
  imports: [
    CommonModule,
    AdminPlayersRoutingModule,
    MaterialModule,
    DialogModule
  ]
})
export class AdminPlayersModule { }
