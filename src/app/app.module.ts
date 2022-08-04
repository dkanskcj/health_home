import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainerEditComponent } from './trainer-edit/trainer-edit.component';
import { TrainerModalComponent } from './trainer-modal/trainer-modal.component';
import { UserModalComponent } from './user-modal/user-modal.component';
import { UserProfileEditComponent } from './user-profile-edit/user-profile-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    TrainerEditComponent,
    UserProfileEditComponent,
    UserModalComponent,
    TrainerModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
