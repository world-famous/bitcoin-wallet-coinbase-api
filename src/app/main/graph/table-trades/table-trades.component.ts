import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-trades',
  templateUrl: './table-trades.component.html',
  styleUrls: ['./table-trades.component.scss']
})
export class TableTradesComponent implements OnInit {

  tradesTable: any[];

  constructor() { }

  ngOnInit() {

      this.tradesTable = [
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'down', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'down', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
          {tradeSize: 10.456, price: 10.57, priceDynamic: 'up', time: '1:12:16'},
      ];
  }

}
