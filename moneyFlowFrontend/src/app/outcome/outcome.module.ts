import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutcomeRoutingModule } from './outcome-routing.module';
import { OutcomeHomeComponent } from './outcome-home/outcome-home.component';


@NgModule({
  declarations: [OutcomeHomeComponent],
  imports: [
    CommonModule,
    OutcomeRoutingModule
  ]
})
export class OutcomeModule { }
