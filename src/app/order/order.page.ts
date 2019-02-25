import { Component, OnInit } from '@angular/core';
import {Todo, TodoService} from './../../services/todo.service';
import {finalize} from 'rxjs/operators';
import {pipe} from 'rxjs';
import {AngularFireStorage} from '@angular/fire/storage';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NavController, NavParams, LoadingController} from '@ionic/angular';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {ActivatedRoute, Router} from 'node_modules/@angular/router';
import { getLocaleDateTimeFormat } from '@angular/common';
import {Observable} from 'rxjs';
import { ToastController } from '@ionic/angular';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
//import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';



@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})



export class OrderPage implements OnInit {
  todos: Todo[];
  todo: Todo = {
    name: '',
    telephone: '',
    location: '',
    size: '',
    category: '',
    drink:'',
    quantity:'',
    drink_quantity:'',
  };

  constructor(private route: ActivatedRoute, public formBuilder: FormBuilder,
    private todoService: TodoService, private toastCtrl: ToastController, private t: TodoService, public navCtrl: NavController,
    private loadingController: LoadingController, private router: Router) {
     }

  ngOnInit() {
    this.todoService.getTodos().subscribe(res => {
      this.todos = res;
    });

  }


  deleteOrder(item) {
    this.todoService.removeTodo(item.id)
    
  }

  remove(item) {
   // if(this.todoService)
    this.todoService.removeTodo(item.id);
  }

  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }
}
