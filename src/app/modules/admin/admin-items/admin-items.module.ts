import { DialogModule } from './../../../shared/module/dialog/dialog.module';
import { MaterialModule } from '../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminItemsRoutingModule } from './admin-items-routing.module';
import { AdminItemsComponent } from './admin-items.component';
import { AdminItemViewComponent } from './admin-item-view/admin-item-view.component';

import { ItemTypePipe } from './pipes/item-type.pipe';

@NgModule({
  declarations: [
    AdminItemsComponent,
    AdminItemViewComponent,
    ItemTypePipe
  ],
  imports: [
    CommonModule,
    AdminItemsRoutingModule,
    MaterialModule,
    DialogModule
  ]
})
export class AdminItemsModule { }
