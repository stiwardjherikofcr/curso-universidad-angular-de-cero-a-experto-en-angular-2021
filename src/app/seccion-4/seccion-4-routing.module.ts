import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivasComponent } from './pages/directivas/directivas.component';
import { LayoutComponent } from '../layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'directivas', component: DirectivasComponent },
      { path: '**', redirectTo: 'directivas', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Seccion4RoutingModule { }
