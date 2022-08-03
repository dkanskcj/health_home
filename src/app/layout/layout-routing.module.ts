import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'user_profile',
        loadChildren: () => import('../user-profile-edit/user-profile-edit.module').then(m=>m.UserProfileEditModule)
      }
    ]
  },
  {
    path:'',
    component: LayoutComponent,
    children: [
      {
        path: 'trainer_profile',
        loadChildren: () => import('../trainer-edit/trainer-edit.module').then(m => m.TrainerEditModule)
      }
    ]
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
