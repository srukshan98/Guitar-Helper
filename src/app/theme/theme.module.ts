import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoutComponent } from './logout/logout.component';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';

const components: any[] = [
  FooterComponent,
  LogoutComponent,
  NavbarComponent,
  SidebarComponent
];

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule
  ]
})
export class ThemeModule { }
