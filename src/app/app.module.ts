import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainerEditComponent } from './trainer-edit/trainer-edit.component';
import { UserProfileEditComponent } from './user-profile-edit/user-profile-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    TrainerEditComponent,
    UserProfileEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
