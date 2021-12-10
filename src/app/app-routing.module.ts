import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'code-view', loadChildren: () => import('./code-view/code-view.module').then(m => m.CodeViewModule)
  },
  {
    path: '', loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule)
  },
  {
    path: '', redirectTo: '/', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
