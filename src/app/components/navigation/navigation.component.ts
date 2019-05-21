import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { toggleMenu } from './navigation.animation';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { NavigationService } from 'src/app/services/navigation.service';
import { WindowDimensionsService } from 'src/app/services/window-dimensions.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass'],
  animations: [toggleMenu]
})
export class NavigationComponent implements OnInit {
  @ViewChild('navMenu') navMenu: ElementRef;
  @ViewChild('hamburger') hamburger: ElementRef;
  @ViewChild('mobileHamburger') mobileHamburger: ElementRef;

  hamburgerNativeEl: HTMLElement;
  mobileHamburgerNativeEl: HTMLElement;

  menuState: string = 'opened';
  windowWidth: number;

  constructor(
    private renderer: Renderer2,
    public ngxSmartModalService: NgxSmartModalService,
    private navService: NavigationService
  ) {}

  ngOnInit() {
    this.hamburgerNativeEl = this.hamburger.nativeElement;
    this.mobileHamburgerNativeEl = this.mobileHamburger.nativeElement;
    // this.navService.currentMenuState.subscribe((menuState: string) => {
    // this.menuState = menuState;
    // this.menuState === 'opened'
    // ? this.renderer.removeClass(this.mobileHamburger.nativeElement, 'hamburger--active')
    // : this.renderer.addClass(this.mobileHamburger.nativeElement, 'hamburger--active');
    // });
  }

  onMenuClick() {
    this.hamburgerNativeEl.classList.contains('hamburger--active')
      ? this.renderer.removeClass(this.hamburgerNativeEl, 'hamburger--active')
      : this.renderer.addClass(this.hamburgerNativeEl, 'hamburger--active');
    this.menuState = this.menuState === 'opened' ? 'closed' : 'opened';
  }

  onMobileNavOpen(el: HTMLElement) {
    // this.menuState = this.menuState === 'opened' ? 'closed' : 'opened';
    // this.navService.changeMenuState(this.menuState);
  }
}
