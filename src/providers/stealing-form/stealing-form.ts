import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { UserProvider } from '../user/user';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

/*
  Generated class for the StealingFormProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class StealingFormProvider {

  constructor(public http: Http, public user : UserProvider, private fb: Facebook) {
  }
  
  sendVehicle(vehicle){
    
    var currentUser = this.user.getUser();
    
    this.fb.api("/me", ["email","public_profile"]).then((resp) => {

      var newVehicle = {
        owner : {
          id : currentUser.authResponse.userId,
          name : resp.first_name + " " + resp.last_name,
          email : resp.email
        },
        location : vehicle.location,
        licensePlate : vehicle.licensePlate
      };

      console.log(vehicle);
      let body = JSON.stringify(vehicle);
      this.http.post('/vehicles/register', body)
      .subscribe(response => {
        console.log(response);
      });
    });



  }
}
