import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { toggleMenu } from './navigation.animation';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass'],
  animations: [toggleMenu]
})
export class NavigationComponent implements OnInit {
  @ViewChild('navMenu') navMenu: ElementRef;
  @ViewChild('mobileHamburger') mobileHamburger: ElementRef;
  menuState: string = 'opened';
  windowWidth: number;

  constructor(
    private renderer: Renderer2,
    public ngxSmartModalService: NgxSmartModalService,
    private navService: NavigationService
  ) {}

  ngOnInit() {
    this.navService.currentMenuState.subscribe((menuState: string) => {
      this.menuState = menuState;
      this.menuState === 'opened'
        ? this.renderer.removeClass(this.mobileHamburger.nativeElement, 'hamburger--active')
        : this.renderer.addClass(this.mobileHamburger.nativeElement, 'hamburger--active');
    });
  }

  onMenuClick(el: HTMLElement) {
    el.classList.contains('hamburger--active')
      ? this.renderer.removeClass(el, 'hamburger--active')
      : this.renderer.addClass(el, 'hamburger--active');
    this.menuState = this.menuState === 'opened' ? 'closed' : 'opened';
  }

  onModalOpen(el: HTMLElement) {
    this.menuState = this.menuState === 'opened' ? 'closed' : 'opened';
    this.navService.changeMenuState(this.menuState);
  }
}
