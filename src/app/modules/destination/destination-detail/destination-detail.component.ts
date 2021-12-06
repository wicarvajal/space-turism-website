import { Component, Input, OnInit } from '@angular/core';
import { IDestination } from '../../shared/interfaces/destinations';

@Component({
  selector: 'app-destination-detail',
  templateUrl: './destination-detail.component.html',
  styleUrls: ['./destination-detail.component.scss']
})
export class DestinationDetailComponent implements OnInit {
  @Input() selectedDestination: IDestination;
  constructor() {
    this.selectedDestination = {};
  }

  ngOnInit(): void {
  }

}
