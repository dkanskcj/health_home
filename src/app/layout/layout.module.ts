import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
// import { SidemenuComponent } from './sidemenu/sidemenu.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    IonicModule,
  ]
})
export class LayoutModule { }