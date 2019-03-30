import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {
  constructor(private Renderer2: Renderer2, private el: ElementRef) {}

  ngOnInit() {}

  onMenuClick(el: HTMLElement) {
    el.classList.contains('hamburger--active')
      ? this.Renderer2.removeClass(el, 'hamburger--active')
      : this.Renderer2.addClass(el, 'hamburger--active');
  }
}
