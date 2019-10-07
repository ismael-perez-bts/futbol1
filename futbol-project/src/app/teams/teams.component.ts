import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../services/teams.services';
import { Team } from '../models/team'

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
  providers: [ TeamsService ]
})
export class TeamsComponent implements OnInit {
  
  public teams$: Observable<Team[]>;

  constructor(private teamsService: TeamsService) {
    this.teams$ = this.teamsService.getTeams().pipe(
      map(results => results.data)
    )

  }

  ngOnInit() {
  }

}
