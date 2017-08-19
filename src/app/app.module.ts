import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StealingFormPage } from '../pages/stealing-form/stealing-form';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomeProvider } from '../providers/home/home';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { Geolocation } from '@ionic-native/geolocation';
import { StealingFormProvider } from '../providers/stealing-form/stealing-form';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    StealingFormPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    StealingFormPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HomeProvider,
    SpeechRecognition,
    Geolocation,
    StealingFormProvider
  ]
})
export class AppModule {}
