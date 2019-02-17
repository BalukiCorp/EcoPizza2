import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-petition',
  templateUrl: './petition.page.html',
  styleUrls: ['./petition.page.scss'],
})
export class PetitionPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  backClicked(){
    this.navCtrl.pop();
  }
}
