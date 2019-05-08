import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { toggleMenu } from './navigation.animation';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass'],
  animations: [toggleMenu]
})
export class NavigationComponent implements OnInit {
  menuState: string = 'opened';
  @ViewChild('navMenu') navMenu: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  onMenuClick(el: HTMLElement) {
    el.classList.contains('hamburger--active')
      ? this.renderer.removeClass(el, 'hamburger--active')
      : this.renderer.addClass(el, 'hamburger--active');
    this.menuState = this.menuState === 'opened' ? 'closed' : 'opened';
  }
}
