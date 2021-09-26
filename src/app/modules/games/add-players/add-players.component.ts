import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlayerModel } from 'src/app/model/player.model';

@Component( {
  selector: 'app-add-players',
  templateUrl: './add-players.component.html',
  styleUrls: [ './add-players.component.scss' ]
} )
export class AddPlayersComponent implements OnInit {
  isEdit: boolean;
  isAdd: boolean;
  form: FormGroup;
  constructor (
    private fb: FormBuilder,
    @Inject( MAT_DIALOG_DATA ) public data: PlayerModel,
    private dialogRef: MatDialogRef<AddPlayersComponent>

  ) { }

  ngOnInit (): void {
    this.form = this.fb.group( {
      Name: [ this.data?.Name ],
      Team: [ this.data?.TeamId ],
    } );
  }

  onAdd (): void {
    this.dialogRef.close();
  }

  onCancel (): void {
    this.dialogRef.close();

  }

}
