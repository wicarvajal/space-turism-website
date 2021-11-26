import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import {filter} from 'rxjs/operators';
import { EAvailableRoutes } from './enum/available-routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'space-turism-website';
  backgroundImage: string;

  constructor(private router: Router) {
    this.backgroundImage = '';
  }

  ngOnInit(): void {
    this.listenRouterChanges();
  }

  listenRouterChanges() {
    this.router.events
    .pipe(filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd))
    .subscribe((url: NavigationEnd)  => {
      this.setBackgroundImage(url.urlAfterRedirects);
    });
  }

  public setBackgroundImage(url: string) {
    const cleanUrl = url.replace('/', '')
    console.log(cleanUrl);
    switch (cleanUrl) {
      case EAvailableRoutes.HOME:
        this.backgroundImage = '../assets/img/home/background-home-desktop.jpg';
        break;
      case EAvailableRoutes.DESTINATION:
        this.backgroundImage = '../assets/img/destination/background-destination-desktop.jpg';
        break;
      case EAvailableRoutes.CREW:
        this.backgroundImage = '../assets/img/crew/background-crew-desktop.jpg';
        break;
      case EAvailableRoutes.TECHNOLOGY:
        this.backgroundImage = '../assets/img/technology/background-technology-desktop.jpg';
        break;
      default:
        this.backgroundImage = '../assets/img/home/background-home-desktop.jpg';
        break;
    }
  }
}
