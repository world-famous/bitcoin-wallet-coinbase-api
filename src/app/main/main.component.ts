import {Component, HostListener, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  nav = [true, false, false, false, false];
  isDropdownVisible = false;
  selectedCurrency$: BehaviorSubject<any> = new BehaviorSubject({title: 'BTC-USD'});

  constructor() { }

  @HostListener('window:resize')
  onWindowResize() {
    if (window.innerWidth > 767) {
      this.nav = [true, true, true, true, true];
    }
  }

  ngOnInit() {
    if (window.innerWidth > 767) {
      this.nav = [true, true, true, true, true];
    }
  }

  navigate(i) {
    this.nav = [false, false, false, false, false];
    this.nav[i] = true;
  }

  toggleDropgown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  onSelectCurrency(item) {
    this.selectedCurrency$.next(item);
    this.toggleDropgown();
  }
}
