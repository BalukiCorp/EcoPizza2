import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderPage } from './order.page';

const routes: Routes = [
  {
    path: '',
    component: OrderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OrderPage]
})
export class OrderPageModule {}
