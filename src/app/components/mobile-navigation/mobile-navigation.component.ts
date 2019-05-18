import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-mobile-navigation',
  templateUrl: './mobile-navigation.component.html',
  styleUrls: ['./mobile-navigation.component.sass']
})
export class MobileNavigationComponent implements OnInit {
  constructor(private navService: NavigationService) {}
  ngOnInit() {}
  onMenuItemClick($event: MouseEvent) {
    this.navService.changeMenuState('opened');
  }
}
