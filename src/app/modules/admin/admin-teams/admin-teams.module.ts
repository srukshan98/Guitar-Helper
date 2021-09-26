import { MaterialModule } from '../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminTeamsRoutingModule } from './admin-teams-routing.module';
import { AdminTeamsComponent } from './admin-teams.component';
import { AdminTeamViewComponent } from './admin-team-view/admin-team-view.component';
import { DialogModule } from '../../../shared/module/dialog/dialog.module';


@NgModule({
  declarations: [
    AdminTeamsComponent,
    AdminTeamViewComponent
  ],
  imports: [
    CommonModule,
    AdminTeamsRoutingModule,
    MaterialModule,
    DialogModule
  ]
})
export class AdminTeamsModule { }
