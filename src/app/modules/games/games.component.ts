import { AddPlayersComponent } from './add-players/add-players.component';
import { AddTeamsComponent } from './add-teams/add-teams.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: [ './games.component.scss' ]
} )
export class GamesComponent implements OnInit {

  constructor (
    public dialog: MatDialog
  ) { }

  ngOnInit (): void {
  }

  addTeam (): void {
    const dialogRef: MatDialogRef<AddTeamsComponent> = this.dialog.open( AddTeamsComponent, {
      width: '400px'
    } );
  }

  addPlayer (): void {
    const dialogRef: MatDialogRef<AddPlayersComponent> = this.dialog.open( AddPlayersComponent, {
      width: '400px'
    } );
  }
}
