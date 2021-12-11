import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestinationModule } from './modules/destination/destination.module';
import { SharedModule } from './modules/shared/shared.module';
import { CrewModule } from './modules/crew/crew.module';
import { TechnologyModule } from './modules/technology/technology.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    DestinationModule,
    CrewModule,
    TechnologyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
