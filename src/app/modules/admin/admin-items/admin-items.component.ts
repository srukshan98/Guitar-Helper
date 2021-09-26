import { AdminItemViewComponent } from './admin-item-view/admin-item-view.component';
import { ItemService } from './../../../services/api/item.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ItemModel } from 'src/app/model/item.model';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { GenericDashboard } from '../../../generics/generic-dashboard';

@Component({
  templateUrl: './admin-items.component.html',
  styleUrls: ['./admin-items.component.scss']
})
export class AdminItemsComponent extends GenericDashboard<ItemModel> implements OnInit {
  displayColumns: string[] = ['Title', 'Type'];

  constructor(
    itemService: ItemService,
    public dialog: MatDialog
  ) {
    super(itemService);
  }

  ngOnInit(): void {
    this.loadData();
  }

  openItem(item?: ItemModel): void {
    this.dialog.open(AdminItemViewComponent, {
      data: {
        item
      },
      width: '700px',
      maxWidth: '90vw'
    });
  }
}
