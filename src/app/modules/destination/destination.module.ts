import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationPageComponent } from './destination-page/destination-page.component';
import { DestinationDetailComponent } from './destination-detail/destination-detail.component';



@NgModule({
  declarations: [
    DestinationPageComponent,
    DestinationDetailComponent
  ],
  imports: [
    CommonModule
  ],
  // exports: [
  //   DestinationDetailComponent
  // ]
})
export class DestinationModule { }
