import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the StealingFormProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class StealingFormProvider {

  constructor(public http: Http) {
  }
  
  sendVehicle(vehicle: object){
    let body = JSON.stringify(vehicle);
    this.http.post('http://stg-hubapps.mundipagg.com:5002/vehicles', body);
  }
}
