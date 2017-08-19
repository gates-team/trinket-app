import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomeProvider } from '../../providers/home/home';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
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

  constructor(public navCtrl: NavController, private speechRecognition: SpeechRecognition, private homeProvider: HomeProvider) {
  
  }

  ionViewDidLoad () {
  }

  registerForNotification () {
  }
}
