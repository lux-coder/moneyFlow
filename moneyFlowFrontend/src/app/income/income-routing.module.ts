import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncomeHomeComponent } from './income-home/income-home.component';


const routes: Routes = [
  { path: '', component: IncomeHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncomeRoutingModule { }
