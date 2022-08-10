import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TotalRoutingModule } from './total-routing.module';
import { TotalComponent } from './total.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    TotalComponent
  ],
  imports: [
    CommonModule,
    TotalRoutingModule,
    FormsModule,
    IonicModule
  ]
})
export class TotalModule { }
