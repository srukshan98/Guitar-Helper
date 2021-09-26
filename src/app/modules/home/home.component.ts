import { HomeItemComponent } from './home-item/home-item.component';
import { ConfigService } from './../../services/util/config.service';
import { ItemModel } from './../../model/item.model';
import { ItemService } from './../../services/api/item.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: Observable<ItemModel[]>;
  displayItems: Observable<ItemModel[]>;
  viewedItems: boolean[] = [];
  memberCount: number = 4;

  get itemStyle(): any {
    const height = window.innerHeight;
    const obj: any = {};

    obj.flex = '0 0 auto';
    obj.width = (99 / Math.sqrt(this.memberCount)) + '%';
    obj.height = (height / Math.sqrt(this.memberCount)) + 'px';

    return obj;
  }

  constructor(
    private itemService: ItemService,
    private configService: ConfigService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.memberCount = this.configService.getSquaredMemberCount();
    this.loadItems();
    this.displayItems.subscribe(console.log)
  }
  loadItems(): void {
    this.items = this.itemService.list();
    const displayMapFn: (items: ItemModel[]) => ItemModel[] = (items: ItemModel[]) => {
      const displayItems: ItemModel[] = [];

      for (let i = 0; i < this.memberCount; i++) {
        if (Math.floor(this.memberCount / 2) === i) {
          displayItems[i] = { Id: null };
          continue;
        }
        const index = Math.floor(Math.random() * items.length);
        displayItems[i] = { ...items[index], Index: i + 1};
      }

      return displayItems;
    };


    this.displayItems = this.items.pipe(map(displayMapFn));
  }

  onItemSelected(item: ItemModel): void {
    this.dialog.open(HomeItemComponent, {
      data: item,
      disableClose: true,
    }).afterClosed().subscribe(r => this.viewedItems[item.Index] = r);
  }

}
