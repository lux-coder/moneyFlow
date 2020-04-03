import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HomeTableComponent } from './home-table/home-table.component';
import { ForeginTableComponent } from './foregin-table/foregin-table.component';
import { PartnersComponent } from './partners/partners.component';

const routes: Routes = [
  { path: '', 
    component: HomeComponent,
    children: [
      { path: '', component: PartnersComponent },
      { path: 'home', component: HomeTableComponent },
      { path: 'foregin', component: ForeginTableComponent }
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalePlanRoutingModule { }
