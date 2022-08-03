import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

// 앵귤러 == 자바스크립트 기반, 타입스크립트는 자바스크립트 기반인데 타입을 지정해주는 스크립트
const routes: Routes = [
  {
    path: '',
    data: {
      layout: 'sidemenu',
    },
    component: LayoutComponent,
    children: [
      {
        path: 'target',
        loadChildren: () => import('../app/user-target/user-target.module').then(m => m.UserTargetModule)
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
