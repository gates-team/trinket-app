import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomeProvider } from '../../providers/home/home';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { OneSignal } from '@ionic-native/onesignal';
import { TextToSpeech } from '@ionic-native/text-to-speech';

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
  voiceCommandResponse;
  messageResponse: string;

  constructor(public navCtrl: NavController, private speechRecognition: SpeechRecognition, 
    private homeProvider: HomeProvider, private tts: TextToSpeech) {
  
  }

  startListening(){
    this.getPermission();
      let options = {
        language: 'pt-BR'
      }
      this.speechRecognition.startListening(options).subscribe(
        (matches: Array<string>) =>{ this.matches = matches;  
          let request = { text: matches[this.firstPhrase] }
          this.getVehicleInformationByVoice(request);          
        },
        (onerror) => console.log('error:', onerror)
    )
  }

  getVehicleInformationByVoice(request: object){
    this.homeProvider.getVehicleDataByVoice(request)
    .subscribe(response => {
      debugger;
      this.startSpeechText(response.text);
      this.voiceCommandResponse = response;
      this.messageResponse= response.text;
    });
  }
        // teste(){
        //   let request = {
        //       "text": "encontrado kwm1182",
        //       "location": [
        //         -22.988088,
        //         -43.2502157
        //       ],
        //       "owner": {
        //         "id": "1234",
        //         "name": "Thiago Barradas",
        //         "email": "th.barradas@gmail.com",
        //         "gender": "male"
        //       }
        //     }
        //   this.homeProvider.getVehicleDataByVoice(request)
        //     .subscribe(response => {
        //       let data = JSON.parse(response._body);
        //       this.startSpeechText(data.text);
        //       this.voiceCommandResponse = data;
        //       this.messageResponse= data.text;
        //   });
        // }

  startSpeechText(message: string){
    this.tts.speak({
      text: message,
      locale: 'pt-BR'
    }).then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
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
