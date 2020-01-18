import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { RateComponent } from './pages/rate/rate.component';
import { CurrencyconverterComponent } from './pages/currencyconverter/currencyconverter.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    RateComponent,
    CurrencyconverterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
