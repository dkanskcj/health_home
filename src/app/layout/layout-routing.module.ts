import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes:Routes = [
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'target',
                loadChildren:()=> import('../user-target/user-target.module').then(m=>m.UserTargetModule),
            }
        ]
    }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class LayoutRoutingModule { }
