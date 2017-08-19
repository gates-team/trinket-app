import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomeProvider } from '../../providers/home/home';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { Facebook } from "@ionic-native/facebook";
import { OneSignal } from '@ionic-native/onesignal';

@IonicPage({name: 'Home'})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HomeProvider]
})
export class HomePage {

  public face: any;
  public status: any;

  constructor(public navCtrl: NavController, private speechRecognition: SpeechRecognition, private homeProvider: HomeProvider, public navParams: NavParams, private fb: Facebook,private oneSignal: OneSignal) {
    //this.status = this.fb.getLoginStatus().then(response => {
    // this.status = response
    //})
    //this.face = this.navParams.get('res');
  }

  ionViewDidLoad () {
  }

  registerForNotification () {
    console.log('testetetetetet');
    this.oneSignal.getIds().then(response => {
      console.log(response);
    })
  }
}
