import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CrewPageComponent } from './crew-page/crew-page.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { CrewDetailComponent } from './crew-detail/crew-detail.component';

@NgModule({
  declarations: [
    CrewPageComponent,
    CrewDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CrewModule { }
