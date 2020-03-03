import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MathsRoutingModule } from './maths-routing.module';
import { MathsComponent } from './maths.component';

@NgModule({
  declarations: [
    MathsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MathsRoutingModule
  ]
})
export class MathsModule {

}
