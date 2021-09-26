import { ItemModel } from './../../../model/item.model';
import { ItemService } from './../../../services/api/item.service';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-home-item',
  templateUrl: './home-item.component.html',
  styleUrls: ['./home-item.component.scss']
})
export class HomeItemComponent implements OnInit, OnDestroy {
  audio: HTMLAudioElement;
  openned = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: ItemModel,
    private itemService: ItemService,
    private ref: MatDialogRef<HomeItemComponent>
  ) { }

  ngOnInit(): void {
    this.audio = new Audio('../../../assets/audio/drum-droll.mp3');
    this.audio.play();
    setTimeout(() => this.openned = true, 1000);
    this.ref.backdropClick().subscribe(() => {
      if (!this.openned) {
        this.ref.close();
      }
    });
  }
  
  onOpen(): void {
    this.openned = !this.openned;
    if (!this.openned) {
      setTimeout(() => {
        if (!this.openned) {
          this.openned = true;
          this.close();
        }
      }, 1500);
    }
  }

  close(): void {
    this.ref.close(this.openned);
  }

  ngOnDestroy(): void {
    this.audio.pause();
    this.close();
  }
}
