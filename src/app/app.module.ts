import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
// import { DownloadsModule } from 'get-package-downloads';
import { NpmService } from 'get-package-downloads';
// import { environment } from '../environments/environment';

// AF2 Settings
// Go to Firebase console and add your own config settings
export const firebaseConfig = {
  apiKey: "AIzaSyA9Y_Mgc5w7SGjZXl9n49iAofgQ0B6WQEg",
  authDomain: "ionic2-test-7b01e.firebaseapp.com",
  databaseURL: "https://ionic2-test-7b01e.firebaseio.com",
  projectId: "ionic2-test-7b01e",
  storageBucket: "ionic2-test-7b01e.appspot.com",
  messagingSenderId: "160667880805"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    HttpModule,
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    IonicModule.forRoot(MyApp),
    // DownloadsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NpmService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
