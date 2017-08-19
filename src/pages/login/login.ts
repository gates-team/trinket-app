import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

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

  constructor(public navCtrl: NavController,private fb: Facebook) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login () {
    /*this.fb.logout()
    this.fb.login(['public_profile', 'user_friends', 'email'])
    .then((res: FacebookLoginResponse) => {
      console.log('Logged into Facebook!', res)
      this.navCtrl.setRoot('Home',res)
    })
    .catch(e => console.log('Error logging into Facebook', e));*/
    //this.fb.getLoginStatus()
    //.then(response => this.navCtrl.setRoot('Home', response))
    //.catch(response => alert(response))
    this.navCtrl.setRoot('Home')    
  }

}
