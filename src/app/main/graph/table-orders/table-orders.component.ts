import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-table-orders',
  templateUrl: './table-orders.component.html',
  styleUrls: ['./table-orders.component.scss']
})
export class TableOrdersComponent implements OnInit {

  ordersTable1: any[];
  ordersTable2: any[];
  tradesTable: any[];
  tablesToggler = true;
  enableToggler: boolean;

  @HostListener('window:resize')
  onWindowResize() {
    this.enableToggler = !!(window.innerWidth > 1023 && window.innerWidth < 1366);
    console.log(this.enableToggler)
  }

  constructor() { }

  ngOnInit() {

    this.enableToggler = window.innerWidth > 1023 && window.innerWidth < 1366;

    this.ordersTable1 = [
        {marketSize: 211.570, price: 10.56, priceColor: 'green', mySize: '-'},
        {marketSize: 211.570, price: 10.56, priceColor: 'green', mySize: '-'},
        {marketSize: 211.570, price: 10.56, priceColor: 'green', mySize: '-'},
        {marketSize: 211.570, price: 10.56, priceColor: 'green', mySize: '-'},
        {marketSize: 211.570, price: 10.56, priceColor: 'green', mySize: '-'},
        {marketSize: 211.570, price: 10.56, priceColor: 'green', mySize: '-'},
        {marketSize: 211.570, price: 10.56, priceColor: 'green', mySize: '-'},
        {marketSize: 211.570, price: 10.56, priceColor: 'green', mySize: '-'},
        {marketSize: 211.570, price: 10.56, priceColor: 'green', mySize: '-'},
        {marketSize: 211.570, price: 10.56, priceColor: 'green', mySize: '-'},
        {marketSize: 211.570, price: 10.56, priceColor: 'green', mySize: '-'},
        {marketSize: 211.570, price: 10.56, priceColor: 'green', mySize: '-'},
        {marketSize: 211.570, price: 10.56, priceColor: 'green', mySize: '-'},
        {marketSize: 211.570, price: 10.56, priceColor: 'green', mySize: '-'},
        {marketSize: 211.570, price: 10.56, priceColor: 'green', mySize: '-'},
        {marketSize: 211.570, price: 10.56, priceColor: 'green', mySize: '-'},
        {marketSize: 211.570, price: 10.56, priceColor: 'green', mySize: '-'},
        {marketSize: 211.570, price: 10.56, priceColor: 'green', mySize: '-'},
        {marketSize: 211.570, price: 10.56, priceColor: 'green', mySize: '-'},
        {marketSize: 211.570, price: 10.56, priceColor: 'green', mySize: '-'},
        {marketSize: 211.570, price: 10.56, priceColor: 'green', mySize: '-'},
        {marketSize: 211.570, price: 10.56, priceColor: 'green', mySize: '-'},
    ];

      this.ordersTable2 = [
          {marketSize: 211.570, price: 10.56, priceColor: 'red', mySize: '-'},
          {marketSize: 211.570, price: 10.56, priceColor: 'red', mySize: '-'},
          {marketSize: 211.570, price: 10.56, priceColor: 'red', mySize: '-'},
          {marketSize: 211.570, price: 10.56, priceColor: 'red', mySize: '-'},
          {marketSize: 211.570, price: 10.56, priceColor: 'red', mySize: '-'},
          {marketSize: 211.570, price: 10.56, priceColor: 'red', mySize: '-'},
          {marketSize: 211.570, price: 10.56, priceColor: 'red', mySize: '-'},
          {marketSize: 211.570, price: 10.56, priceColor: 'red', mySize: '-'},
          {marketSize: 211.570, price: 10.56, priceColor: 'red', mySize: '-'},
          {marketSize: 211.570, price: 10.56, priceColor: 'red', mySize: '-'},
          {marketSize: 211.570, price: 10.56, priceColor: 'red', mySize: '-'},
          {marketSize: 211.570, price: 10.56, priceColor: 'red', mySize: '-'},
          {marketSize: 211.570, price: 10.56, priceColor: 'red', mySize: '-'},
          {marketSize: 211.570, price: 10.56, priceColor: 'red', mySize: '-'},
          {marketSize: 211.570, price: 10.56, priceColor: 'red', mySize: '-'},
          {marketSize: 211.570, price: 10.56, priceColor: 'red', mySize: '-'},
          {marketSize: 211.570, price: 10.56, priceColor: 'red', mySize: '-'},
          {marketSize: 211.570, price: 10.56, priceColor: 'red', mySize: '-'},
          {marketSize: 211.570, price: 10.56, priceColor: 'red', mySize: '-'},
          {marketSize: 211.570, price: 10.56, priceColor: 'red', mySize: '-'},
          {marketSize: 211.570, price: 10.56, priceColor: 'red', mySize: '-'},
          {marketSize: 211.570, price: 10.56, priceColor: 'red', mySize: '-'},
          {marketSize: 211.570, price: 10.56, priceColor: 'red', mySize: '-'},
          {marketSize: 211.570, price: 10.56, priceColor: 'red', mySize: '-'},
      ];

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
