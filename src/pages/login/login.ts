import { Component } from '@angular/core';
import {NavController, MenuController } from 'ionic-angular';
import {UserProvider} from '../../providers/user/user'

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
class LoginPage {

    constructor(public navCtrl: NavController, public userProvider: UserProvider, public menuCtrl: MenuController) {
      //this.menuCtrl.enable(false)
    }
    
    ionViewWillEnter() {
      this.userProvider.user.subscribe(response => {
        if(response!= null) {        
          if(!response.isAnonymous) {
            this.navCtrl.setRoot('Home')
          }
        }
      })
    }

    login () {
      this.userProvider.login()
    }
}

export class ALoginPage extends LoginPage {}
export class BLoginPage extends LoginPage {}
