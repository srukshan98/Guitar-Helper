import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminTeamsComponent } from './admin-teams.component';

const routes: Routes = [{ path: '', component: AdminTeamsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminTeamsRoutingModule { }
