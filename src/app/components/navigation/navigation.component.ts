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
  private _options: Object;
  private _revealer;

  constructor(private Renderer2: Renderer2, private router: Router) {
    this._options = {
      // the layers are the elements that move from the sides
      nmbLayers: 2,
      // bg color of each layer
      bgcolor: ['#37a7ff', '#7447ae', '#feb144'],
      // effect classname
      effect: 'anim--effect-2'
    };
    this._revealer = new window['Revealer'](this._options);
  }

  ngOnInit() {
    this._revealer.reveal('top');
    setTimeout(() => {
      console.log(this.navMenu);
      this.navMenu.nativeElement.style.opacity = 1;
    }, 1500);
  }

  onMenuClick(el: HTMLElement) {
    el.classList.contains('hamburger--active')
      ? this.Renderer2.removeClass(el, 'hamburger--active')
      : this.Renderer2.addClass(el, 'hamburger--active');
    this.menuState = this.menuState === 'opened' ? 'closed' : 'opened';
  }

  navigate(path: string) {
    if (path === 'home') {
      this._revealer.reveal('left');
    } else {
      this._revealer.reveal('right');
    }
    setTimeout(() => {
      this.router.navigate([`${path}`]);
    }, 150);
  }
}
