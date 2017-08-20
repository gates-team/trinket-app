import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import {UserProvider} from '../../providers/user/user'

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,private fb: Facebook, private userProvider: UserProvider) {
  }

  ionViewCanEnter () {
    this.login();
  }

  verifyLogin () {
    this.fb.getLoginStatus()
    .then((res) => {
      if(res.status === 'connected') {
        this.userProvider.saveUser(res)
        this.navCtrl.setRoot('Home',res)
      } else {
        this.navCtrl.setRoot('Login')
      }
    })
    .catch(e => console.log('Error logging into Facebook', e));
  }

  login () {
    this.navCtrl.setRoot('Home');
    this.fb.getLoginStatus().then((FacebookStatusResponse) => {
      if(FacebookStatusResponse.status == 'connected')
      {
        console.log('Already logged into Facebook!', FacebookStatusResponse)
        this.navCtrl.setRoot('Home',FacebookStatusResponse)
      }
      else
      {
        
        this.loginCore();
      }
    });

   
  }

  loginCore() {
   this.fb.login(['public_profile', 'user_friends', 'email'])
    .then((res: FacebookLoginResponse) => {
      console.log('Logged into Facebook!', res)
      this.userProvider.saveUser(res)      
      this.navCtrl.setRoot('Home',res)
    })
    .catch(e => console.log('Error logging into Facebook', e));
  }

}
