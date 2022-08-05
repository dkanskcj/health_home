import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerEditComponent } from './trainer-edit.component';
import { TrainerEditRoutingModule } from './trainer-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { UserProfileEditComponent } from '../user-profile-edit/user-profile-edit.component';



@NgModule({
  declarations: [TrainerEditComponent],
  imports: [
    CommonModule,
    TrainerEditRoutingModule,
    FormsModule
  ]
})
export class TrainerEditModule { }
