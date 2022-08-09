import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { NgChartsModule } from 'ng2-charts';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModalComponent } from './user-modal/user-modal.component';
import { TestModalComponent } from './pages/test-modal/test-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    UserModalComponent,
    TestModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    IonicModule.forRoot(),
    NgChartsModule,
  ],
  providers: [{ provide:RouteReuseStrategy, useClass:IonicRouteStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
