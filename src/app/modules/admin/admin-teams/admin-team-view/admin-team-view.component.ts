import { TeamService } from './../../../../services/api/team.service';
import { TeamModel } from './../../../../model/team.model';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';

interface TeamData {
  team?: TeamModel;
}

@Component({
  templateUrl: './admin-team-view.component.html',
  styleUrls: ['./admin-team-view.component.scss']
})
export class AdminTeamViewComponent implements OnInit {
  isEdit: boolean;
  isAdd: boolean;
  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: TeamData,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AdminTeamViewComponent>,
    private service: TeamService
  ) { }

  ngOnInit(): void {
    this.isAdd = !this.data?.team?.Id;
    this.isEdit = this.isAdd;
    this.form = this.fb.group({
      Name: [this.data?.team?.Name],
    });
  }

  save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    let ref: Observable<any>;
    if (!this.isAdd) {
      ref = this.service.updateTeam({
        ...this.data?.team,
        ...this.form.value
      });
    } else {
      ref = this.service.addTeam({
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
      this.closeAfterObservable(this.service.deleteTeam(this.data?.team?.Id));
    }
  }
}
