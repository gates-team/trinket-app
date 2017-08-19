import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeProvider } from '../../providers/home/home';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HomeProvider]
})
export class HomePage {
  
  constructor(public navCtrl: NavController, private homeProvider: HomeProvider) {
    this.homeProvider.testTrinketApi();
  }
}
