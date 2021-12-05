import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationPageComponent } from './destination-page/destination-page.component';
import { DestinationDetailComponent } from './destination-detail/destination-detail.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    DestinationPageComponent,
    DestinationDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
        
  ]
})
export class DestinationModule { }
