import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeProvider } from '../../providers/home/home';
import { SpeechRecognition } from '@ionic-native/speech-recognition';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HomeProvider]
})
export class HomePage {
  
  constructor(public navCtrl: NavController, private speechRecognition: SpeechRecognition, private homeProvider: HomeProvider) {
  }

  ionViewDidLoad () {
    this.speechRecognition.isRecognitionAvailable()
    .then((available: boolean) => console.log(available))
  }
}
