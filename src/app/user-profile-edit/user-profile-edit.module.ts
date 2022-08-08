import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UserProfileEditRoutingModule } from './user-profile-edit-routing.module';
import { UserProfileEditComponent } from './user-profile-edit.component';


@NgModule({
  declarations: [UserProfileEditComponent],
  imports: [
    CommonModule,
    UserProfileEditRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    IonicModule,
  ]
})
export class UserProfileEditModule { }
