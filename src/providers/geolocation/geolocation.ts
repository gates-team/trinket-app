import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Geolocation } from '@ionic-native/geolocation';

/*
  Generated class for the GeolocationProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class GeolocationProvider {

  constructor(private geolocation: Geolocation) {}

  getPosition() {
    return this.geolocation.getCurrentPosition()
    .then((resp) => {
      Promise.resolve(resp)
    }).catch((error) => {
      console.log('Error getting location', error);
      Promise.reject(error)
    });
  }

}
