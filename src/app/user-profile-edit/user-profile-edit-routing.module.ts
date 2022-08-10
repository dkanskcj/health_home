import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileEditComponent } from './user-profile-edit.component';

const routes: Routes = [
  {
    path: '',
    component: UserProfileEditComponent,

    // children: [
    //   {
    //     path: 'user_modal',
    //     loadChildren: () => import('../user-modal/user-modal.module').then(m=>m.UserModalModule)
    //   }
    // ]
  },
  {
    path: 'test_modal',
    loadChildren: () => import('../pages/test-modal/test-modal.module').then(m=>m.TestModalModule)
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserProfileEditRoutingModule { }
