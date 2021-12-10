import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodeViewComponent } from './code-view.component';

const routes: Routes = [
  {
    path: '', component: CodeViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodeViewRoutingModule { }
