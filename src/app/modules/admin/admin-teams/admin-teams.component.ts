import { AdminTeamViewComponent } from './admin-team-view/admin-team-view.component';
import { TeamService } from './../../../services/api/team.service';
import { TeamModel } from './../../../model/team.model';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GenericDashboard } from '../../../generics/generic-dashboard';

@Component({
  selector: 'app-admin-teams',
  templateUrl: './admin-teams.component.html',
  styleUrls: ['./admin-teams.component.scss']
})
export class AdminTeamsComponent extends GenericDashboard<TeamModel> implements OnInit {
  displayColumns: string[] = ['Name'];

  constructor(
    teamService: TeamService,
    private dialog: MatDialog
  ) {
    super(teamService);
  }

  ngOnInit(): void {
    this.loadData();
  }

  openTeam(team?: TeamModel): void {
    this.dialog.open(AdminTeamViewComponent, {
      data: {
        team
      },
      width: '700px',
      maxWidth: '90vw'
    });
  }
}
