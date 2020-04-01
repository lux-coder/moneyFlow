import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncomeRoutingModule } from './income-routing.module';
import { IncomeHomeComponent } from './income-home/income-home.component';


@NgModule({
  declarations: [IncomeHomeComponent],
  imports: [
    CommonModule,
    IncomeRoutingModule
  ]
})
export class IncomeModule { }
