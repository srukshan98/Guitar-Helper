import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminItemsComponent } from './admin-items.component';

const routes: Routes = [{ path: '', component: AdminItemsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminItemsRoutingModule { }
