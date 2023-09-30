import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'form', loadChildren: () => import('./pages/form-page/form-page.module').then(m => m.FormPageModule),
  },
  {
    path: '', redirectTo: 'form', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
