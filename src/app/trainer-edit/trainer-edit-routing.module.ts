import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerEditComponent } from './trainer-edit.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TrainerEditComponent
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TrainerEditRoutingModule { }
