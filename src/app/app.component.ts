import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LocalStorageConfigProvider} from '../providers/local-storage/local-storage-config';
import { IntroPage } from '../pages/intro/intro';
import { RegisterPage } from '../pages/register/register';

@Component({
  templateUrl: 'app.html',
  providers: [
    LocalStorageConfigProvider
  ]
})
export class MyApp {
  rootPage:any;

  constructor(
    platform: Platform, statusBar: StatusBar, 
    splashScreen: SplashScreen,
    localStorageConfigProvider: LocalStorageConfigProvider) {
    platform.ready().then(() => {

      let config = localStorageConfigProvider.getConfigData();

      if(config == null) {
        this.rootPage = IntroPage;
        localStorageConfigProvider.setConfigData(false);
      } else {
        this.rootPage = RegisterPage;
      }

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

