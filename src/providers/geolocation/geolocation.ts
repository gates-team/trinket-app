import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { BackgroundGeolocation} from '@ionic-native/background-geolocation';

/*
  Generated class for the GeolocationProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class GeolocationProvider {

  constructor(private backgroundGeolocation: BackgroundGeolocation) {}

  getLocations() {
    return this.backgroundGeolocation.getLocations()
  }

  getValidLocations() {
    return this.backgroundGeolocation.getValidLocations()
  }

}
