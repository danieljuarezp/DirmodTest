import { Component, OnInit } from '@angular/core';
import { getRate, getCurrency } from '../../services/service';
import { currencies } from '../../consts/const';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  allRates: boolean = true;
  loading: boolean = true;
  defaultSource: string = 'USD';
  defaultTarget: string = 'MXN';
  defaultQuality: number = 1;
  defaultCurrencies: string[] = currencies;
  rates: any;
  currencyPrice: any;

  constructor() { }

  ngOnInit() {
    this.callApi();
  }

  changeDefaultSource(source: string){
    this.defaultSource = source;
  }

  changeDefaultTarget(target: string){
    this.defaultTarget = target;
  }

  changeDefaultQuality(quality: number){
    this.defaultQuality = quality;
  }

  callApi() {
    setTimeout(() => {
      this.allRates ? this.getRate() : this.getCurrency();
      this.callApi();
    }, 5000);
   }

  changeType(isAllRates: boolean){
    this.allRates = isAllRates;
    this.loading = false;
    this.allRates ? this.getRate() : this.getCurrency();
  }

  getRate(){
    this.loading = true;
    getRate(this.defaultSource)
    .then(result => {
      this.loading = false;
      this.rates = result.data.result.conversion.filter(currency => this.defaultCurrencies.includes(currency.to));
    });
  }

  getCurrency(){
    this.loading = true;
    getCurrency(this.defaultSource, this.defaultTarget, this.defaultQuality)
    .then(result => {
      this.loading = false;
      this.currencyPrice = result.data.result;
    });
  }

}
