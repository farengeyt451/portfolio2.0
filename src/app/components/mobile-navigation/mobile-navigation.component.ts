import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NavMenuItem } from '@interfaces/nav-menu.interfaces';

@Component({
  selector: 'app-mobile-navigation',
  templateUrl: './mobile-navigation.component.html',
  styleUrls: ['./mobile-navigation.component.sass']
})
export class MobileNavigationComponent implements OnInit {
  @Input() navMenuItems: NavMenuItem[];
  @Output() onMobileNavItemSelect = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onMenuItemClick() {
    this.onMobileNavItemSelect.emit('hidden');
  }
}
