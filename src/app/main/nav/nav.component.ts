import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  nav = [true, false, false, false, false];
  @Output() onNavigate = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  navigate(i) {
    this.onNavigate.emit(i);
    this.nav = [false, false, false, false, false];
    this.nav[i] = true;
  }

}
