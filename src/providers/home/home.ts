import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the HomeProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class HomeProvider {

  constructor(public http: Http) {

  }

  testTrinketApi() {
    return this.http.get('http://stg-hubapps.mundipagg.com:5002/')
    .subscribe(data => console.log(data))
  }
}
