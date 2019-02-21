import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PetitionPage } from './petition.page';

const routes: Routes = [
  {
    path: '',
    component: PetitionPage
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
  declarations: [PetitionPage]
})
export class PetitionPageModule {}
