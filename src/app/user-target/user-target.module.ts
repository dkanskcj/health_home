import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserTargetRoutingModule } from './user-target-routing.module';
import { UserTargetComponent } from './user-target.component';



@NgModule({
  declarations: [UserTargetComponent],
  imports: [
    CommonModule,
    UserTargetRoutingModule
  ]
})
export class UserTargetModule { }
