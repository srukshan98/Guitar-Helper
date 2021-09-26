import { LogoutComponent } from './theme/logout/logout.component';
import { AuthGuardService } from './services/util/auth-guard.service';
import { BaseComponent } from './theme/base/base.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'redirect/:route',
    redirectTo: '/:route'
  },
  {
    path: 'admin',
    canActivate: [ AuthGuardService ],
    data: { isAdmin: true },
    loadChildren: () => import( './modules/admin/admin.module' ).then( m => m.AdminModule )
  },
  {
    component: BaseComponent,
    path: '',
    canActivate: [ AuthGuardService ],
    children: [
      { path: 'home', loadChildren: () => import( './modules/home/home.module' ).then( m => m.HomeModule ) },
      { path: 'game', loadChildren: () => import( './modules/games/games.module' ).then( m => m.GamesModule ) },
      { path: '**', redirectTo: 'home' }
    ]
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule {

}
