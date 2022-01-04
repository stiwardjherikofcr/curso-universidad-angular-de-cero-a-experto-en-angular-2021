import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { IndexComponent } from './pages/index.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: LayoutComponent, children: [{ path: 'home', component: IndexComponent },], },
  { path: 'seccion-3', loadChildren: () => import('./seccion-3/seccion-3.module').then(m => m.Seccion3Module) },
  { path: 'seccion-4', loadChildren: () => import('./seccion-4/seccion-4.module').then(m => m.Seccion4Module) },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
