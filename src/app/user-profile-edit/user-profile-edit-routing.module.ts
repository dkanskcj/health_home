import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileEditComponent } from './user-profile-edit.component';

const routes: Routes = [
  {
    path: '',
    component: UserProfileEditComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserProfileEditRoutingModule { }
