import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private speechRecognition: SpeechRecognition) {

  }

  ionViewDidLoad () {
    this.speechRecognition.isRecognitionAvailable()
    .then((available: boolean) => console.log(available))
  }

}
