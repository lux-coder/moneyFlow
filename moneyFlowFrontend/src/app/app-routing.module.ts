import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'income', 
    loadChildren: () => 
      import('./income/income.module').then(m => m.IncomeModule) },
  { path: 'outcome',
    loadChildren: () => 
      import('./outcome/outcome.module').then(m => m.OutcomeModule ) },
  { path: 'flow',
    loadChildren: () => 
      import('./flow/flow.module').then(m => m.FlowModule ) },
  { path:'', component: HomeComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
