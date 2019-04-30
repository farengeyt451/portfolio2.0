import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { toggleMenu } from './menu.animation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass'],
  animations: [toggleMenu]
})
export class NavigationComponent implements OnInit {
  menuState: string = 'opened';
  @ViewChild('navMenu') navMenu: ElementRef;

  constructor(private renderer: Renderer2, private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.renderer.setStyle(this.navMenu.nativeElement, 'opacity', '1');
    }, 100);
  }

  onMenuClick(el: HTMLElement) {
    el.classList.contains('hamburger--active')
      ? this.renderer.removeClass(el, 'hamburger--active')
      : this.renderer.addClass(el, 'hamburger--active');
    this.menuState = this.menuState === 'opened' ? 'closed' : 'opened';
  }

  navigate(path: string) {
    this.router.navigate([`${path}`]);
  }
}
