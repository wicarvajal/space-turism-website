import { Component, Input, OnInit } from '@angular/core';
import { ICrew } from '../../shared/interfaces/crew';

@Component({
  selector: 'app-crew-detail',
  templateUrl: './crew-detail.component.html',
  styleUrls: ['./crew-detail.component.scss']
})
export class CrewDetailComponent implements OnInit {
  @Input() selectedCrewMember: ICrew;

  constructor() {
    this.selectedCrewMember = {};
  }

  ngOnInit(): void {
  }

}
