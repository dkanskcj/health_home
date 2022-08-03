import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { UserTargetComponent } from './user-target/user-target.component';

// 앵귤러 == 자바스크립트 기반, 타입스크립트는 자바스크립트 기반인데 타입을 지정해주는 스크립트
const routes: Routes = [
  {
    path:'',
    loadChildren:()=> import('./layout/layout.module').then(m=>m.LayoutModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
