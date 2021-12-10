import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeViewRoutingModule } from './code-view-routing.module';
import { CodeViewComponent } from './code-view.component';


@NgModule({
  declarations: [
    CodeViewComponent
  ],
  imports: [
    CommonModule,
    CodeViewRoutingModule
  ]
})
export class CodeViewModule { }
