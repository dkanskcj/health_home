import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestModalComponent } from './test-modal.component';

const routes: Routes = [{
  path:'',
  component:TestModalComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestModalRoutingModule { }
