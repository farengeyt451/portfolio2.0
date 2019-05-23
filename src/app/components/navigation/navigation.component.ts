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

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass'],
  animations: [toggleMenu]
})
export class NavigationComponent implements OnInit {
  @ViewChild('navMenu') navMenu: ElementRef;
  @ViewChild('hamburger') hamburger: ElementRef;
  @Output() onMenuStateChange = new EventEmitter<string>();

  hamburgerNativeEl: HTMLElement;

  menuState: string = 'opened';

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.hamburgerNativeEl = this.hamburger.nativeElement;
  }

  onMenuClick() {
    this.hamburgerNativeEl.classList.contains('hamburger--active')
      ? this.renderer.removeClass(this.hamburgerNativeEl, 'hamburger--active')
      : this.renderer.addClass(this.hamburgerNativeEl, 'hamburger--active');
    this.menuState = this.menuState === 'opened' ? 'closed' : 'opened';
    this.onMenuStateChange.emit(this.menuState);
  }
}
