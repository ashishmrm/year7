import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MathsComponent } from './maths.component';

const routes: Routes = [
  {
    path: '', component: MathsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MathsRoutingModule {

}
