import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent implements OnInit, OnDestroy {
  tippyOptions = {
    placement: 'top',
    arrow: false,
    animation: 'shift-toward',
    theme: 'skill',
    trigger: 'mouseenter',
    delay: [100, 100],
    flipOnUpdate: true,
    sticky: true
  };
  navSubscription$: Subscription;
  menuState: string;

  constructor(private navService: NavigationService) {}

  ngOnInit() {
    // this.navSubscription$ = this.navService.currentMenuState.subscribe(
    // menuState => (this.menuState = menuState)
    // );
  }

  ngOnDestroy() {
    // this.navSubscription$.unsubscribe();
  }
}
