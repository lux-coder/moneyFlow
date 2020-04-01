import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlowRoutingModule } from './flow-routing.module';
import { FlowHomeComponent } from './flow-home/flow-home.component';


@NgModule({
  declarations: [FlowHomeComponent],
  imports: [
    CommonModule,
    FlowRoutingModule
  ]
})
export class FlowModule { }
