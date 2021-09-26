import { ThemeModule } from './../../theme/theme.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AdminComponent,
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    ThemeModule,
    AdminRoutingModule,
    MatTooltipModule
  ]
})
export class AdminModule { }
