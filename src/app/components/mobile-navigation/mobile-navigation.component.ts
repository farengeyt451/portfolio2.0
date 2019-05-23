import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mobile-navigation',
  templateUrl: './mobile-navigation.component.html',
  styleUrls: ['./mobile-navigation.component.sass']
})
export class MobileNavigationComponent implements OnInit {
  @Output() onNavEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onMenuItemClick() {
    this.onNavEvent.emit('hidden');
  }
}
