import {
  Component,
  OnInit,
  Renderer2,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter
} from '@angular/core';
import { toggleMenu } from './navigation.animation';
import { navMenuItems } from '@fixtures/nav-menu.fixtures';
import { NavMenuItem } from '@interfaces/nav-menu.interfaces';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass'],
  animations: [toggleMenu]
})
export class NavigationComponent implements OnInit {
  @Output() onContentStateChange = new EventEmitter<string>();
  @ViewChild('navMenu', { read: ElementRef, static: true }) navMenu: ElementRef;
  @ViewChild('hamburger', { read: ElementRef, static: true }) hamburger: ElementRef;

  navMenuItems: NavMenuItem[] = navMenuItems;
  menuState: string = 'hidden';
  contentState: string = 'visible';
  mediaMatcher: MediaQueryList;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.initMatcher();
  }

  initMatcher() {
    this.mediaMatcher = window.matchMedia('(max-width: 639px)');

    this.mediaMatcher.addListener((queryList: MediaQueryListEvent) => {
      if (queryList.matches && this.menuState === 'visible') {
        this.contentState = 'hidden';
        this.emitContentState();
      } else {
        this.contentState = 'visible';
        this.emitContentState();
      }
    });
  }

  onMobileNavItemSelect() {
    this.onMenuClick();
  }

  onMenuClick() {
    this.toggleHamburgerAnimation();
    this.changeNavMenuState();
    this.mediaMatcher.matches && this.changeContentState();
  }

  toggleHamburgerAnimation() {
    const hamburgerNativeEl: HTMLElement = this.hamburger.nativeElement;

    hamburgerNativeEl.classList.contains('hamburger--active')
      ? this.renderer.removeClass(hamburgerNativeEl, 'hamburger--active')
      : this.renderer.addClass(hamburgerNativeEl, 'hamburger--active');
  }

  changeNavMenuState() {
    this.menuState = this.menuState === 'hidden' ? 'visible' : 'hidden';
  }

  changeContentState() {
    this.contentState = this.contentState === 'hidden' ? 'visible' : 'hidden';
    this.emitContentState();
  }

  emitContentState() {
    this.onContentStateChange.emit(this.contentState);
  }
}
