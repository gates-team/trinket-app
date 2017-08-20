import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { StealingFormProvider } from '../../providers/stealing-form/stealing-form';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
/**
 * Generated class for the StealingFormPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stealing-form',
  templateUrl: 'stealing-form.html',
})
export class StealingFormPage {
  private form: FormGroup;
  public licensePlate: any;
  private latitude: any;
  private longitude: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation,
     private stealingProvider: StealingFormProvider) {
   
  }
  
  getCurrentPostion(){
    this.geolocation.getCurrentPosition().then(resp => {
        this.latitude = resp.coords.latitude,
        this.longitude = resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }
  
  sendVehicleForm(teste: any){
    let vehicle = this.createVehicle();
    this.stealingProvider.sendVehicle(vehicle);
  }

  createVehicle(): object {
      return {
       isStolen: true,
       licensePlate: this.licensePlate,
       location: [this.latitude, this.longitude]
       owner : {
            id: '1234',
            name: 'ASDASDASD',
            email: 'ADASDASDASD',
            gender: 'ASDADASDASDA'
      }
    };
  }
  
  ionViewDidLoad() {
    this.getCurrentPostion();
  }
}
