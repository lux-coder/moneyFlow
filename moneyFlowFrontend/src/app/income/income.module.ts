import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncomeRoutingModule } from './income-routing.module';
import { IncomeHomeComponent } from './income-home/income-home.component';

import { SharedModule } from '../shared/shared.module';
import { TableComponent } from './table/table.component';

import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [IncomeHomeComponent, TableComponent],
  imports: [
    CommonModule,
    IncomeRoutingModule,

    SharedModule,

    MatTableModule
  ]
})
export class IncomeModule { }
