import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
// import { SidemenuComponent } from './sidemenu/sidemenu.component';



@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class LayoutModule { }
