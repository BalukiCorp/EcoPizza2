import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {NativeStorage} from '@ionic-native/native-storage/ngx';
import {Facebook} from '@ionic-native/facebook/ngx';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './auth.service';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { HttpModule } from '@angular/http';

export const firebaseConfig = environment.firebaseConfig;

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [HttpModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(firebaseConfig), AngularFirestoreModule,
    AngularFirestoreModule, AngularFireStorageModule],
  providers: [
    AngularFirestoreModule,
    StatusBar,
    SplashScreen,
    NativeStorage,
    Facebook,
    HttpClientModule,
    AuthService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
