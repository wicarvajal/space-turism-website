import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';
import { IDestination } from '../../shared/interfaces/destinations';

@Component({
  selector: 'app-destination-page',
  templateUrl: './destination-page.component.html',
  styleUrls: ['./destination-page.component.scss']
})
export class DestinationPageComponent implements OnInit {
  public destinationList!: IDestination[];
  public selectedDestination!: IDestination;

  constructor(public sharedService: SharedService) {
    this.destinationList = [];
    this.selectedDestination = {};
  }

  ngOnInit(): void {
    this.destinationList = this.sharedService.getDestinations();
    this.selectedDestination = this.destinationList[0];
  }

  public setDestination(destinationName: string): void {
    this.selectedDestination = this.destinationList.find(destination => destination.name === destinationName) ?? {};

  }
}
