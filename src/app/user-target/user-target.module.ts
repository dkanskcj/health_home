import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgChartsModule } from 'ng2-charts';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UserTargetRoutingModule } from './user-target-routing.module';
import { UserTargetComponent } from './user-target.component';



@NgModule({


  declarations: [UserTargetComponent],
  imports: [
    CommonModule,
    UserTargetRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    IonicModule,
  ]
})
export class UserTargetModule {
  
 }
