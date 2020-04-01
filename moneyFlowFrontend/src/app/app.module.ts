import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IncomeModule } from './income/income.module';
import { OutcomeModule } from './outcome/outcome.module';
import { FlowModule } from './flow/flow.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    IncomeModule,
    OutcomeModule,
    FlowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
