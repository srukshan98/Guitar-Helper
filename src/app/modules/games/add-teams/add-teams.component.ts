import { TeamModel } from './../../../model/team.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component( {
  selector: 'app-add-teams',
  templateUrl: './add-teams.component.html',
  styleUrls: [ './add-teams.component.scss' ]
} )
export class AddTeamsComponent implements OnInit {
  form: FormGroup;
  constructor (
    private fb: FormBuilder,
    @Inject( MAT_DIALOG_DATA ) public data: TeamModel,
    private dialogRef: MatDialogRef<AddTeamsComponent>
  ) { }

  ngOnInit (): void {
    this.form = this.fb.group( {
      Name: [ this.data?.Name ],
      // Players: [ this.data?.Players ],
    } );
  }

  onAdd (): void {
    this.dialogRef.close();
  }

  onCancel (): void {
    this.dialogRef.close();

  }

}
