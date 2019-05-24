import {
  Component,
  OnInit,
  Renderer2,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs';
import { WindowDimensionsService } from '../../services/window-dimensions.service';
import { toggleMenu } from './navigation.animation';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass'],
  animations: [toggleMenu]
})
export class NavigationComponent implements OnInit, OnDestroy {
  @ViewChild('navMenu') navMenu: ElementRef;
  @ViewChild('hamburger') hamburger: ElementRef;
  @Output() onContentStateChange = new EventEmitter<string>();

  hamburgerNativeEl: HTMLElement;
  menuState: string = 'hidden';
  contentState: string = 'visible';
  windowDimsSub$: Subscription;
  windowWidth: number;

  constructor(private renderer: Renderer2, private winDim: WindowDimensionsService) {}

  ngOnInit() {
    this.hamburgerNativeEl = this.hamburger.nativeElement;
    this.windowDimsSub$ = this.winDim.windowSizeChanged.subscribe(dims => {
      this.windowWidth = dims.width;
      if (this.windowWidth > 638) {
        this.contentState = 'visible';
        this.onContentStateChange.emit(this.contentState);
      } else if (this.menuState === 'visible') {
        this.contentState = 'hidden';
        this.onContentStateChange.emit(this.contentState);
      }
    });
  }

  ngOnDestroy() {
    this.windowDimsSub$.unsubscribe();
  }

  onNavEvent() {
    this.onMenuClick();
  }

  onMenuClick() {
    this.toggleHamburgerAnimation();
    this.changeNavMenuState();
    this.windowWidth < 639 && this.changeContentState();
  }

  toggleHamburgerAnimation() {
    this.hamburgerNativeEl.classList.contains('hamburger--active')
      ? this.renderer.removeClass(this.hamburgerNativeEl, 'hamburger--active')
      : this.renderer.addClass(this.hamburgerNativeEl, 'hamburger--active');
  }

  changeNavMenuState() {
    this.menuState = this.menuState === 'hidden' ? 'visible' : 'hidden';
  }

  changeContentState() {
    this.contentState = this.contentState === 'hidden' ? 'visible' : 'hidden';
    this.onContentStateChange.emit(this.contentState);
  }
}
