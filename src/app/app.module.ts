import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { InvoicesComponent } from './pages/invoices/invoices.component';


// 앵귤러 == 자바스크립트 기반, 타입스크립트는 자바스크립트 기반인데 타입을 지정해주는 스크립트
const routes:Routes = [
  {
    path:'',
    data:{
      layout:'sidemenu',
    },
    component:LayoutComponent,
    children:[
      {
        path: 'invoices'
        // loadChildren : ()
      }
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    InvoicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
