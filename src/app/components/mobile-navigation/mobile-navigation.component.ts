import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { WindowDimensionsService } from 'src/app/services/window-dimensions.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mobile-navigation',
  templateUrl: './mobile-navigation.component.html',
  styleUrls: ['./mobile-navigation.component.sass']
})
export class MobileNavigationComponent implements OnInit, OnDestroy {
  windowDimSubscribtion$: Subscription;
  windowWidth: number;

  constructor(private navService: NavigationService, private windowDim: WindowDimensionsService) {}

  ngOnInit() {}

  ngOnDestroy() {}

  onMenuItemClick($event: MouseEvent) {}

  toggleMenu(windowWidth: number) {}
}
