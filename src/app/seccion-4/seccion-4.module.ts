import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Seccion4RoutingModule } from './seccion-4-routing.module';
import { DirectivasComponent } from './pages/directivas/directivas.component';


@NgModule({
  declarations: [
    DirectivasComponent
  ],
  imports: [
    CommonModule,
    Seccion4RoutingModule
  ]
})
export class Seccion4Module { }
