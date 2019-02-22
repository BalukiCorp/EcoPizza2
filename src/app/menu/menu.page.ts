import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {Todo, TodoService} from './../../services/todo.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }


  addPetition_Clicked(){
    this.navCtrl.navigateForward(['/petition']);
  }
}
