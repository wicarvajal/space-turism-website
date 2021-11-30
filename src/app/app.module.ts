import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestinationModule } from './modules/destination/destination.module';
import { NavbarModule } from './modules/navbar/navbar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    DestinationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
