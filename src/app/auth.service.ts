import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Facebook} from '@ionic-native/facebook/ngx';
import * as firebase from 'firebase';
import {environment} from '../environments/environment';
import {Platform} from '@ionic/angular';


export const firebaseConfig = environment.firebaseConfig;

firebase.initializeApp(firebaseConfig);

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private facebook: Facebook, private platform: Platform) { }

  facebookLogin(): Promise<any> {
    return this.facebook.login(['email'])
        .then(response => {
          const facebookCredential = firebase.auth.FacebookAuthProvider
              .credential(response.authResponse.accessToken);
          if (this.platform.is('android') || this.platform.is('mobileweb')) {
            firebase.auth().signInWithCredential(facebookCredential)
                .then(success => {
                  console.log("Firebase success: " + JSON.stringify(success));
                });
          } else {
            firebase.auth().signInWithRedirect(facebookCredential)
                .then(success => {
                  console.log("Firebase success: " + JSON.stringify(success));
                });
          }

        }).catch((error) => {
          console.log(error)
        });
  }
}
