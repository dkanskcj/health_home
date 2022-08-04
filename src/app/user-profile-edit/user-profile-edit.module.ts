import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileEditRoutingModule } from './user-profile-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserProfileEditRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class UserProfileEditModule { }
