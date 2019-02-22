import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {finalize} from 'rxjs/operators';
import {Todo, TodoService} from './../../services/todo.service';
import {pipe} from 'rxjs';
import {AngularFireStorage} from '@angular/fire/storage';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NavController, NavParams, LoadingController} from '@ionic/angular';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {ActivatedRoute} from 'node_modules/@angular/router';
import { getLocaleDateTimeFormat } from '@angular/common';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-petition',
  templateUrl: './petition.page.html',
  styleUrls: ['./petition.page.scss'],
})
export class PetitionPage implements OnInit {
  formRegister: FormGroup;
  todo: Todo = {
    name: '',
    telephone: '',
    location: '',
    category: '',
  };
  todoId = null;


  constructor(private route: ActivatedRoute, public navCtrl: NavController, public formBuilder: FormBuilder,
    private todoService: TodoService, private loadingController: LoadingController) {
    this.formRegister = this.formBuilder.group({
      name: ['', Validators.required],
    location: ['', Validators.required],
    telephone: ['', Validators.required],
    category: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.todoId = this.route.snapshot.params['id'];
    if (this.todoId)  {
      this.loadTodo();
    }
  }

  backClicked() {
     this.navCtrl.pop();
  }
  async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'Loading Todo..'
    });
    await loading.present();

    this.todoService.getTodo(this.todoId).subscribe(res => {
      loading.dismiss();
      this.todo = res;
    });
  }

  async saveTodo() {

    const loading = await this.loadingController.create({
      message: 'Pedido enviado..'
    });
    await loading.present();

    if (this.todoId) {
      this.todoService.updateTodo(this.todo, this.todoId).then(() => {
        let textInput = document.querySelector("#imageUser");

        loading.dismiss();

      });
    } else {
      this.todoService.addTodo(this.todo).then(() => {
        loading.dismiss();
        this.navCtrl.navigateForward(['/tabs/home']);
      });
    }
  }
}
