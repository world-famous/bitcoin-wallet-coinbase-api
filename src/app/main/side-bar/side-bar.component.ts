import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  tabs = [true, false, false];
  buttons = [true, false];
  advanced = false;
  executionToggler = true;

  constructor() { }

  ngOnInit() {
  }

  selectTab(i) {
    this.tabs = [false, false, false];
    this.tabs[i] = true;
  }

  clickButton(i) {
    this.buttons = [false, false];
    this.buttons[i] = true;
  }

}
