import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  items: any[];
  @Input() isDropdownVisible;
  @Output() selectedItem = new EventEmitter();

  constructor() { }

  ngOnInit() {

    this.items = [
      {
        title: 'Fiat Markets',
        groups: [
          {
            logo: './assets/img/bitcoin.svg',
            title: 'BTC-USD',
            description: 'Bitcoin',
            chart: './assets/img/chart-small.png',
            value: '$ 6.530,10',
            dynamic: '+ 1.83%',
            dynamicDirection: true,
          },
          {
            logo: './assets/img/bitcoin.svg',
            title: 'BTC-EUR',
            description: 'Bitcoin',
            chart: './assets/img/chart-small.png',
            value: '$ 6.530,10',
            dynamic: '+ 1.83%',
            dynamicDirection: true,
          }
        ]
      },
      {
        title: 'Crypto Markets',
        groups: [
          {
            logo: './assets/img/bitcoin.svg',
            title: 'BTC-GPB',
            description: 'Bitcoin',
            chart: './assets/img/chart-small.png',
            value: '$ 6.530,10',
            dynamic: '+ 1.83%',
            dynamicDirection: true,
          },
          {
            logo: './assets/img/bitcoin.svg',
            title: 'BTC-LTC',
            description: 'Bitcoin',
            chart: './assets/img/chart-small.png',
            value: '$ 6.530,10',
            dynamic: '- 1.83%',
            dynamicDirection: false,
          },
          {
            logo: './assets/img/bitcoin.svg',
            title: 'BTC-BCH',
            description: 'Bitcoin',
            chart: './assets/img/chart-small.png',
            value: '$ 6.530,10',
            dynamic: '+ 1.83%',
            dynamicDirection: true,
          }
        ]
      }
    ];

  }

  selectItem(item) {
    this.selectedItem.emit(item);
  }

}
