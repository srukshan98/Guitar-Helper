import { AdminPlayerViewComponent } from './admin-player-view/admin-player-view.component';
import { PlayerService } from './../../../services/api/player.service';
import { PlayerModel } from './../../../model/player.model';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GenericDashboard } from '../../../generics/generic-dashboard';

@Component({
  selector: 'app-admin-players',
  templateUrl: './admin-players.component.html',
  styleUrls: ['./admin-players.component.scss']
})
export class AdminPlayersComponent extends GenericDashboard<PlayerModel> implements OnInit {
  displayColumns: string[] = ['Name'];

  constructor(
    playerService: PlayerService,
    private dialog: MatDialog
  ) {
    super(playerService);
  }

  ngOnInit(): void {
    this.loadData();
  }

  openPlayer(player?: PlayerModel): void {
    this.dialog.open(AdminPlayerViewComponent, {
      data: {
        player
      },
      width: '700px',
      maxWidth: '90vw'
    });
  }
}
