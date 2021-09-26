import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogContainerComponent } from './dialog-container/dialog-container.component';
import { DialogHeaderComponent } from './dialog-header/dialog-header.component';



@NgModule({
  declarations: [
    DialogContainerComponent,
    DialogHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DialogContainerComponent,
    DialogHeaderComponent
  ]
})
export class DialogModule { }
