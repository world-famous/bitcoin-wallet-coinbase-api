import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() selectedCurrency$;
  @Output() onDropdownToggle = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleDropdown() {
    this.onDropdownToggle.emit();
  }
}
