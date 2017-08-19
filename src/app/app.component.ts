import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../pages/home/home';
import { ALoginPage } from '../pages/login/login';
import { OneSignal } from "@ionic-native/onesignal";
import { UserProvider } from "../providers/user/user";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ALoginPage;

  pages: Array<{title: string, component: any}>;
  
  isVisible: boolean = false;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private oneSignal: OneSignal, private userProvider: UserProvider) {
    this.initializeApp();
    this.pages = [
      { title: 'Home', component: HomePage }
    ];
    this.userProvider.user.subscribe(response => {      
      if(response!= null) {        
        if(!response.isAnonymous){
          this.isVisible = true
        } else {
          this.isVisible = false
        }
      } else {
        this.isVisible = false
        //this.nav.setRoot(LoginPage)
      }
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      /*this.oneSignal.startInit('570d6f01-58e2-472a-9025-a8a237a4c72d', '221171942800');
      this.oneSignal.handleNotificationReceived().subscribe((data) => {
        console.log('Notificações: ' + JSON.stringify(data));
      });
      this.oneSignal.endInit();*/
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout () {
    this.userProvider.logout()
    //this.nav.setRoot(LoginPage)
  }
}
