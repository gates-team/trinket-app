import { Component } from '@angular/core';
import { IonicPage,NavController } from 'ionic-angular';
import { HomeProvider } from '../../providers/home/home';
import { SpeechRecognition } from '@ionic-native/speech-recognition';

@IonicPage({name: 'Home'})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HomeProvider]
})
export class HomePage {
  
  constructor(public navCtrl: NavController, private speechRecognition: SpeechRecognition, private homeProvider: HomeProvider) {
  }

  ionViewDidLoad () {
  }
}
