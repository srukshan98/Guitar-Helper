import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeItemComponent } from './home-item/home-item.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [
    HomeComponent,
    HomeItemComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class HomeModule { }
