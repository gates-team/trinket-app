import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

/*
  Generated class for the HomeProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class HomeProvider {

  constructor(public http: Http) {

  }

  getVehicleDataByVoice(voiceData: Object): Observable<Object> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://stg-hubapps.mundipagg.com:5002/voice', 
    JSON.stringify(voiceData), { headers });    
  }
}
