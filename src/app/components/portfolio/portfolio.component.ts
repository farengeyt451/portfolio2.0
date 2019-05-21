import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { swiperConfig } from './swiper.config';
import { projects } from './projects';
import { Project } from '../../interfaces/portfolio.interface';
import { SwiperComponent } from 'ngx-swiper-wrapper';
import { Subscription } from 'rxjs';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent implements OnInit {
  swiperConfig = swiperConfig;
  projects: Array<Project>;
  @ViewChild(SwiperComponent) componentRef?: SwiperComponent;

  navSubscription$: Subscription;
  menuState: string;

  constructor(private navService: NavigationService) {}

  ngOnInit() {
    this.projects = projects;
    // this.navSubscription$ = this.navService.currentMenuState.subscribe(
    // menuState => (this.menuState = menuState)
    // );
  }

  ngOnDestroy() {
    // this.navSubscription$.unsubscribe();
  }
}
