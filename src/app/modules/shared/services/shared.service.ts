import { Injectable } from '@angular/core';
import { IDestination } from '../interfaces/destinations';
import value from './data.json';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  public getDestinations(): IDestination[] {
    return value.destinations;
  }
}
