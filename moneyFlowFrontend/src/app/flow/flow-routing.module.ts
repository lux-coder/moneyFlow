import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlowHomeComponent } from './flow-home/flow-home.component';

const routes: Routes = [
  { path: '', component: FlowHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlowRoutingModule { }
