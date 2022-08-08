import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UserTargetRoutingModule } from './user-target-routing.module';
import { UserTargetComponent } from './user-target.component';
import { Chart } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';



@NgModule({


  declarations: [UserTargetComponent],
  imports: [
    CommonModule,
    UserTargetRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    IonicModule,
    NgChartsModule
  ]
})
export class UserTargetModule {
  
 }
