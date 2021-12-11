import { Component, HostListener, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { EAvailableRoutes } from './modules/shared/enum/available-routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = event.target.innerWidth;
    this.windowClasification = this.getWindowSizeClasification();
    this.setBackgroundImage(this.currentUrl);
  }

  public title = 'space-turism-website';
  public currentUrl: string;
  public backgroundImage: string;
  public windowClasification: string;
  private innerWidth: number;

  constructor(private router: Router) {
    this.backgroundImage = '';
    this.windowClasification = '';
    this.currentUrl = '';
    this.innerWidth = window.innerWidth;
  }

  ngOnInit(): void {
    this.windowClasification = this.getWindowSizeClasification();
    this.listenRouterChanges();
  }

  listenRouterChanges() {
    this.router.events
      .pipe(filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((url: NavigationEnd) => {
        const cleanUrl = url.urlAfterRedirects.replace('/', '');
        this.currentUrl = cleanUrl;
        this.setBackgroundImage(cleanUrl);
      });
  }

  public setBackgroundImage(url: string) {
    switch (url) {
      case EAvailableRoutes.HOME:
        this.backgroundImage = `../assets/img/home/background-home-${this.windowClasification}.jpg`;
        break;
      case EAvailableRoutes.DESTINATION:
        this.backgroundImage = `../assets/img/destination/background-destination-${this.windowClasification}.jpg`;
        break;
      case EAvailableRoutes.CREW:
        this.backgroundImage = `../assets/img/crew/background-crew-${this.windowClasification}.jpg`;
        break;
      case EAvailableRoutes.TECHNOLOGY:
        this.backgroundImage = `../assets/img/technology/background-technology-${this.windowClasification}.jpg`;
        break;
      default:
        this.backgroundImage = `../assets/img/home/background-home-${this.windowClasification}.jpg`;
        break;
    }
  }

  getWindowSizeClasification(): string {
    if (this.innerWidth > 1000) { return 'desktop' } else
      if (this.innerWidth < 1000 && this.innerWidth > 500) { return 'tablet' } else
        if (this.innerWidth < 500) { return 'mobile' } else
          return 'desktop';
  }
}
