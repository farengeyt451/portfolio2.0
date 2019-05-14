import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { toggleMenu } from './navigation.animation';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass'],
  animations: [toggleMenu]
})
export class NavigationComponent implements OnInit {
  @ViewChild('navMenu') navMenu: ElementRef;
  menuState: string = 'opened';
  windowWidth: number;

  constructor(private renderer: Renderer2, public ngxSmartModalService: NgxSmartModalService) {}

  ngOnInit() {}

  onMenuClick(el: HTMLElement) {
    el.classList.contains('hamburger--active')
      ? this.renderer.removeClass(el, 'hamburger--active')
      : this.renderer.addClass(el, 'hamburger--active');
    this.menuState = this.menuState === 'opened' ? 'closed' : 'opened';
  }

  onModalOpen() {
    this.ngxSmartModalService.open('mobNav');
  }
}
