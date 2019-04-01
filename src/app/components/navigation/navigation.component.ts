import { Component, OnInit, Renderer2 } from '@angular/core';
import { toggleMenu } from './menu.animation';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass'],
  animations: [toggleMenu]
})
export class NavigationComponent implements OnInit {
  menuState: string = 'opened';

  constructor(private Renderer2: Renderer2) {}

  ngOnInit() {}

  onMenuClick(el: HTMLElement) {
    el.classList.contains('hamburger--active')
      ? this.Renderer2.removeClass(el, 'hamburger--active')
      : this.Renderer2.addClass(el, 'hamburger--active');
    this.menuState = this.menuState === 'opened' ? 'closed' : 'opened';
  }
}
