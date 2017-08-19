import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UserProvider {

  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  login() {
    let provider = new firebase.auth.GoogleAuthProvider()
    this.afAuth.auth.signInWithRedirect(provider).then(() => {
      this.afAuth.auth.getRedirectResult().then( result => {
        // This gives you a Google Access Token.
        // You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(token, user);
      }).catch(function(error) {
        // Handle Errors here.
        console.log(error.message);
      });
    })
  }

  logout() {
    this.afAuth.auth.signOut();
  }


}
