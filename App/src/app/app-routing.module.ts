import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { RateComponent } from './pages/rate/rate.component';
import { CurrencyconverterComponent } from './pages/currencyconverter/currencyconverter.component';


const routes: Routes = [
{ path: '', redirectTo: '/Index', pathMatch: 'full' },
{ path: 'Index', component: IndexComponent },
{ path: 'Rate', component: RateComponent },
{ path: 'CurrencyConverter', component: CurrencyconverterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
