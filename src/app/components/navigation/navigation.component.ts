import { Component, OnInit, Renderer2, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { toggleMenu } from './navigation.animation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass'],
  animations: [toggleMenu]
})
export class NavigationComponent implements OnInit, AfterViewInit {
  menuState: string = 'opened';
  @ViewChild('navMenu') navMenu: ElementRef;

  constructor(private renderer: Renderer2, private router: Router) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.renderer.setStyle(this.navMenu.nativeElement, 'opacity', '1');
  }

  onMenuClick(el: HTMLElement) {
    el.classList.contains('hamburger--active')
      ? this.renderer.removeClass(el, 'hamburger--active')
      : this.renderer.addClass(el, 'hamburger--active');
    this.menuState = this.menuState === 'opened' ? 'closed' : 'opened';
  }
}
