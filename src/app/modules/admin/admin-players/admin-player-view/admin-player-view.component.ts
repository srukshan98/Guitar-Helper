import { PlayerService } from './../../../../services/api/player.service';
import { PlayerModel } from './../../../../model/player.model';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';

interface PlayerData {
  player?: PlayerModel;
}

@Component({
  templateUrl: './admin-player-view.component.html',
  styleUrls: ['./admin-player-view.component.scss']
})
export class AdminPlayerViewComponent implements OnInit {
  isEdit: boolean;
  isAdd: boolean;
  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: PlayerData,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AdminPlayerViewComponent>,
    private service: PlayerService
  ) { }

  ngOnInit(): void {
    this.isAdd = !this.data?.player?.Id;
    this.isEdit = this.isAdd;
    this.form = this.fb.group({
      Name: [this.data?.player?.Name],
    });
  }

  save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    let ref: Observable<any>;
    if (!this.isAdd) {
      ref = this.service.updatePlayer({
        ...this.data?.player,
        ...this.form.value
      });
    } else {
      ref = this.service.addPlayer({
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
      this.closeAfterObservable(this.service.deletePlayer(this.data?.player?.Id));
    }
  }
}
