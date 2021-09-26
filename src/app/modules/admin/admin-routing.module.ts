import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [{
  path: '',
  component: AdminComponent,
  children: [
    {
      path: 'dashboard',
      component: AdminDashboardComponent
    },
    {
      path: 'users',
      loadChildren: () => import('./admin-users/admin-users.module').then(m => m.AdminUsersModule)
    },
    {
      path: 'items',
      loadChildren: () => import('./admin-items/admin-items.module').then(m => m.AdminItemsModule)
    },
    {
      path: 'teams',
      loadChildren: () => import('./admin-teams/admin-teams.module').then(m => m.AdminTeamsModule)
    },
    {
      path: 'players',
      loadChildren: () => import('./admin-players/admin-players.module').then(m => m.AdminPlayersModule)
    },
    {
      path: '**',
      redirectTo: 'dashboard'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
