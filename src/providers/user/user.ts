import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor(public http: Http) {
    console.log('Hello UserProvider Provider');
  }

  saveUser (payload) {
    let user = localStorage.getItem('USER')
    if(!user) {
      localStorage.setItem('USER',JSON.stringify(payload))
      return true
    } else {
      return true
    }
  }

  getUser () {
    return JSON.parse(localStorage.getItem('USER'))
  }

}