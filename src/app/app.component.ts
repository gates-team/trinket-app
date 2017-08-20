import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation';
import { Geolocation } from '@ionic-native/geolocation';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { OneSignal } from "@ionic-native/onesignal";
import { StealingFormPage } from '../pages/stealing-form/stealing-form';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  config: BackgroundGeolocationConfig = {
      desiredAccuracy: 10,
      stationaryRadius: 20,
      distanceFilter: 30,
      debug: true, //  enable this hear sounds for background-geolocation life-cycle.
      stopOnTerminate: false, // enable this to clear background location settings when the app terminates
  };

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private oneSignal: OneSignal, private backgroundGeolocation: BackgroundGeolocation, private geolocation: Geolocation) {
    this.initializeApp();
    // 
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Informar Roubo', component: StealingFormPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.geolocation.getCurrentPosition().then((resp) => {
       }).catch((error) => {
         console.log('Error getting location', error);
       });
      this.oneSignal.startInit('570d6f01-58e2-472a-9025-a8a237a4c72d', '221171942800');
      this.oneSignal.handleNotificationReceived().subscribe((data) => {
        console.log('Notificações: ' + JSON.stringify(data));
      });
      this.oneSignal.endInit();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
