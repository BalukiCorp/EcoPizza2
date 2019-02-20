import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Router} from '@angular/router';
import {NativeStorage} from '@ionic-native/native-storage/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private router: Router,
    private nativeStorage: NativeStorage,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.nativeStorage.getItem('google_user')
          .then(data => {
            this.router.navigate(['/tabs']);
            this.splashScreen.hide();
          }, error => {
            this.router.navigate(['/login']);
            this.splashScreen.hide();
          });
      this.statusBar.styleDefault();
    });
  }
}
