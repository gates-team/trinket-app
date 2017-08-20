import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomeProvider } from '../../providers/home/home';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { OneSignal } from '@ionic-native/onesignal';
import { GeolocationProvider } from "../../providers/geolocation/geolocation";

@IonicPage({name: 'Home'})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HomeProvider]
})
export class HomePage {
  firstPhrase: number = 0;
  public face: any;
  public status: any;
  matches: string[];
  vehicleData: object;
  result: string;

  constructor(public navCtrl: NavController, private speechRecognition: SpeechRecognition, 
    private homeProvider: HomeProvider) {
  
  }

  startListening(){
    this.getPermission();
      let options = {
        language: 'pt-BR'
      }
      this.speechRecognition.startListening(options).subscribe(
        (matches: Array<string>) =>{ this.matches = matches;  
          let request = { text: matches[this.firstPhrase] }
          this.homeProvider.getVehicleDataByVoice(request)
          .subscribe(response => {
            this.vehicleData = response
            this.result = JSON.stringify(this.vehicleData);
          });
        },
        (onerror) => console.log('error:', onerror)
    )
  }

  getPermission() {
    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {
        if (!hasPermission) {
          this.speechRecognition.requestPermission();
        }
      });
  }

  ionViewDidLoad () {
  }

  registerForNotification () {
  }
}
