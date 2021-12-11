import { Injectable } from '@angular/core';
import { IDestination } from '../interfaces/destinations';
import value from './data.json';
import { ICrew } from '../interfaces/crew';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  public getDestinations(): IDestination[] {
    return value.destinations;
  }

  public getCrew(): ICrew[] {
    return value.crew;
  }
}
