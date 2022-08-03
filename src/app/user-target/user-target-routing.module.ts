import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTargetComponent } from './user-target.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
    {
        path:'',
        component:UserTargetComponent
    }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class UserTargetRoutingModule { }
