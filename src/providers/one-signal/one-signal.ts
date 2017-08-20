import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { OneSignal } from "@ionic-native/onesignal";

/*
  Generated class for the OneSignalProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class OneSignalProvider {

  constructor(private oneSignal: OneSignal) {}

  getID () {
    return this.oneSignal.getIds()
  }

}
