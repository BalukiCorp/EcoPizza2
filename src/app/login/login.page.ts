import { Component, OnInit } from '@angular/core';
import {AlertController, LoadingController, NavController, Platform} from '@ionic/angular';
import {Router} from '@angular/router';
import {NativeStorage} from '@ionic-native/native-storage/ngx';
import {AuthService} from '../auth.service';
import {Facebook} from '@ionic-native/facebook/ngx';
import * as firebase from 'firebase';




@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    logged_In = false;
    userProfile: any = null;
    FB_APP_ID = 277392406522365;

    constructor(private fb: Facebook,
                public navCtrl: NavController,
                public authProvider: AuthService
    ) {
      firebase.auth().onAuthStateChanged(user => {
          if (user){
              this.userProfile = user;
          } else{
              this.userProfile = null;
          }
      });
    }

    ngOnInit() {
    }

    doFbLogin() {
        this.authProvider.facebookLogin().then(
            res => {
                console.log('Login Exitoso', res);
                this.navCtrl.navigateForward(['/tabs/home']);
                this.logged_In = true;
            }
        ).catch(error => console.log('Error de inicio de sesion', error));
    }
    signOut() {
        this.authProvider.signOut();
        this.logged_In = false;
    }
}
