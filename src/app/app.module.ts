import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LotesComponent } from './lotes/lotes.component';
import { WaterChartComponent } from './water-chart/water-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    LotesComponent,
    WaterChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
