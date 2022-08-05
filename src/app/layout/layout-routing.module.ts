import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../pages/dashboard/dashboard.module').then(m=>m.DashboardModule)
      },
      {
        path: 'user_profile',
        loadChildren: () => import('../user-profile-edit/user-profile-edit.module').then(m=>m.UserProfileEditModule)
      },
      {
        path: 'trainer_profile',
        loadChildren: () => import('../trainer-edit/trainer-edit.module').then(m => m.TrainerEditModule)
      },
      {
        path: 'user_target',
        loadChildren: () => import('../user-target/user-target.module').then(m=>m.UserTargetModule)
      },
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
