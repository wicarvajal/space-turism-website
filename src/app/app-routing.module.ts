import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationPageComponent } from './modules/destination/destination-page/destination-page.component';
import { CrewPageComponent } from './modules/crew/crew-page/crew-page.component';
import { TechnologyPageComponent } from './modules/technology/technology-page/technology-page.component';
import { HomeComponent } from './modules/home/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'destination', component: DestinationPageComponent },
  { path: 'crew', component: CrewPageComponent },
  { path: 'technology', component: TechnologyPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
