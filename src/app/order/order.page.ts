import { Component, OnInit } from '@angular/core';
import {Todo, TodoService} from './../../services/todo.service';
//import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {finalize} from 'rxjs/operators';
//import {Todo, TodoService} from './../../services/todo.service';
import {pipe} from 'rxjs';
import {AngularFireStorage} from '@angular/fire/storage';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NavController, NavParams, LoadingController} from '@ionic/angular';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {ActivatedRoute} from 'node_modules/@angular/router';
import { getLocaleDateTimeFormat } from '@angular/common';
import {Observable} from 'rxjs';



@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})



export class OrderPage implements OnInit {
 
  
  constructor(private route: ActivatedRoute, public formBuilder: FormBuilder,
    private todoService: TodoService, public navCtrl: NavController,
    private loadingController: LoadingController) {
      

     }

  ngOnInit() {
    
  }

 
}
