import { Component, OnInit } from '@angular/core';
import {GooglePlus} from '@ionic-native/google-plus/ngx';
import {AlertController, LoadingController, Platform} from '@ionic/angular';
import {Router} from '@angular/router';
import {NativeStorage} from '@ionic-native/native-storage/ngx';
import {environment} from '../../environments/environment';



@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    constructor(private googlePlus: GooglePlus,
                public loadingController: LoadingController,
                private nativeStorage: NativeStorage,
                private router: Router,
                private platform: Platform,
                public alertController: AlertController,
    ) { }

    ngOnInit() {
    }
    async doGoogleLogin() {
        const loading = await this.loadingController.create({
            message: 'Please wait ...'
        });
        this.presentLoading(loading);

        this.googlePlus.login({
            'scopes': '',
            'webClientId': environment.webClientId,
            'offline': true
        })
            .then(user => {
                this.nativeStorage.setItem('google_user', {
                    name: user.displayName,
                    email: user.email,
                    picture: user.imageUrl
                })
                    .then(() => {
                    this.router.navigate(['/tabs']);
                }, (error) => {
                    console.log(error);
                });
                loading.dismiss();
            }, err => {
                console.log(err);
                if (!this.platform.is('cordova')) {
                    this.presentAlert();
                }
                loading.dismiss();
            });
    }
    async presentLoading(loading) {
        return await loading.present();
    }
    async presentAlert() {
        const alert = await this.alertController.create({
           message: 'Cordova is not available on desktop try on real device or emulator',
           buttons: ['OK'],
        });
        await alert.present();
    }
}
