import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StealingFormPage } from '../pages/stealing-form/stealing-form';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomeProvider } from '../providers/home/home';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { OneSignal } from '@ionic-native/onesignal';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { LoginPage } from "../pages/login/login";
import { Geolocation } from '@ionic-native/geolocation';
import { StealingFormProvider } from '../providers/stealing-form/stealing-form';
import { OneSignalProvider } from '../providers/one-signal/one-signal';
import { httpFactory } from "./http.factory";
import { BackgroundGeolocation} from '@ionic-native/background-geolocation';
import { GeolocationProvider } from '../providers/geolocation/geolocation';
import { UserProvider } from '../providers/user/user';

@NgModule({
  declarations: [
    MyApp,
    ListPage,
    LoginPage,
    ListPage,
    StealingFormPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
    LoginPage,
    ListPage,
    StealingFormPage
  ],
  providers: [
    {
        provide: Http,
        useFactory: httpFactory,
        deps: [XHRBackend, RequestOptions]
    },
    StatusBar,
    SplashScreen,
    HomeProvider,
    SpeechRecognition,
    Facebook,
    OneSignal,
    Geolocation,
    StealingFormProvider,
    OneSignalProvider,
    BackgroundGeolocation,
    GeolocationProvider,
    UserProvider,
    UserProvider
  ]
})
export class AppModule {}
