import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Seccion3RoutingModule } from './seccion-3-routing.module';
import { DataBindingComponent } from './pages/data-binding/data-binding.component';


@NgModule({
  declarations: [
    DataBindingComponent
  ],
  imports: [
    CommonModule,
    Seccion3RoutingModule
  ]
})
export class Seccion3Module { }
