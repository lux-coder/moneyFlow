import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalePlanRoutingModule } from './sale-plan-routing.module';

import { HomeComponent } from './home/home.component';
import { ForeginTableComponent } from './foregin-table/foregin-table.component';
import { HomeTableComponent } from './home-table/home-table.component';
import { PartnersComponent } from './partners/partners.component';

import { SharedModule } from '../shared/shared.module';

import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [HomeComponent, ForeginTableComponent, HomeTableComponent, PartnersComponent],
  imports: [
    CommonModule,
    SalePlanRoutingModule,

    SharedModule,

    MatTabsModule
  ]
})
export class SalePlanModule { }
