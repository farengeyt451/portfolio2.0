import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, OnDestroy {
  navSubscription: Subscription;
  menuState: string;

  constructor(private navService: NavigationService) {}

  ngOnInit() {
    this.navSubscription = this.navService.currentMenuState.subscribe(
      menuState => (this.menuState = menuState)
    );
  }

  ngOnDestroy() {
    this.navSubscription.unsubscribe();
  }
}
