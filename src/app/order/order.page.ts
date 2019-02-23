import { Component, OnInit } from '@angular/core';
import {Todo, TodoService} from './../../services/todo.service';
import {finalize} from 'rxjs/operators';
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
  todos: Todo[];


  constructor(private route: ActivatedRoute, public formBuilder: FormBuilder,
    private todoService: TodoService, public navCtrl: NavController,
    private loadingController: LoadingController) {
     }

  ngOnInit() {
    this.todoService.getTodos().subscribe(res => {
      this.todos = res;
    });

  }

}
