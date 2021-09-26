import { ItemTypeList } from './../../../../config/item.types';
import { TypeModel } from './../../../../model/type.model';
import { Observable } from 'rxjs';
import { ItemService } from './../../../../services/api/item.service';
import { ItemModel } from 'src/app/model/item.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

interface ItemData {
  item?: ItemModel;
}

@Component({
  templateUrl: './admin-item-view.component.html',
  styleUrls: ['./admin-item-view.component.scss']
})
export class AdminItemViewComponent implements OnInit {
  isEdit: boolean;
  isAdd: boolean;
  form: FormGroup;
  itemTypes: TypeModel[] = ItemTypeList;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ItemData,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AdminItemViewComponent>,
    private itemService: ItemService
  ) { }

  ngOnInit(): void {
    this.isAdd = !this.data?.item?.Id;
    this.isEdit = this.isAdd;
    this.form = this.fb.group({
      Title: [this.data?.item?.Title],
      Action: [this.data?.item?.Action],
      Type: [this.data?.item?.Type],
    });
  }

  save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    let ref: Observable<any>;
    if (!this.isAdd) {
      ref = this.itemService.updateItem({
        ...this.data?.item,
        ...this.form.value
      });
    } else {
      ref = this.itemService.addItem({
        ...this.form.value
      });
    }
    this.closeAfterObservable(ref);
  }

  closeAfterObservable(ob: Observable<any>): void {
    ob.subscribe(() => {
      this.dialogRef.close();
    });
  }

  delete(): void {
    if (!this.isAdd) {
      this.closeAfterObservable(this.itemService.deleteItem(this.data?.item?.Id));
    }
  }
}
