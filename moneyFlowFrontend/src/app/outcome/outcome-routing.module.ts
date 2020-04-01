import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutcomeHomeComponent } from './outcome-home/outcome-home.component';


const routes: Routes = [
  {
    path:'outcome', component: OutcomeHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutcomeRoutingModule { }
