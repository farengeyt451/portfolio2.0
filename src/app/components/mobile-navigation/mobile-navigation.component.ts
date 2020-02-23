import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mobile-navigation',
  templateUrl: './mobile-navigation.component.html',
  styleUrls: ['./mobile-navigation.component.sass']
})
export class MobileNavigationComponent implements OnInit {
  @Output() onMobileNavItemSelect = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onMenuItemClick() {
    this.onMobileNavItemSelect.emit('hidden');
  }
}
