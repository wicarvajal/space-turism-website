import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';
import { ICrew } from '../../shared/interfaces/crew';

@Component({
  selector: 'app-crew-page',
  templateUrl: './crew-page.component.html',
  styleUrls: ['./crew-page.component.scss']
})
export class CrewPageComponent implements OnInit {
  public crewList: ICrew[];
  public selectedCrewMember: ICrew;

  constructor(private sharedSvc: SharedService) {
    this.crewList = [];
    this.selectedCrewMember = {};
  }

  ngOnInit(): void {
    this.crewList = this.sharedSvc.getCrew();
    this.selectedCrewMember = this.crewList[0];
  }

  public setCrewMember(memberName: string) {
    this.selectedCrewMember = this.crewList.find(member => member.name === memberName) ?? {};
    console.log(this.selectedCrewMember)
  }
}
