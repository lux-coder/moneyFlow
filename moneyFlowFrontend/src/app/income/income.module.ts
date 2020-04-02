import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncomeRoutingModule } from './income-routing.module';
import { IncomeHomeComponent } from './income-home/income-home.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [IncomeHomeComponent],
  imports: [
    CommonModule,
    IncomeRoutingModule,

    SharedModule
  ]
})
export class IncomeModule { }
