import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutcomeRoutingModule } from './outcome-routing.module';
import { OutcomeHomeComponent } from './outcome-home/outcome-home.component';
import { TableComponent } from './table/table.component';

import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [OutcomeHomeComponent, TableComponent],
  imports: [
    CommonModule,
    OutcomeRoutingModule,

    MatTableModule,


  ]
})
export class OutcomeModule { }
