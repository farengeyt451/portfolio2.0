import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { toggleMenu } from './navigation.animation';
import { NavMenuItem } from '@interfaces/nav-menu.interfaces';
import { DataService } from '@modules/core/services/data.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass'],
  animations: [toggleMenu]
})
export class NavigationComponent implements OnInit {
  @Output() onContentStateChange = new EventEmitter<string>();

  isHamburgerActive: boolean;
  navMenuItems: NavMenuItem[];
  menuState: string = 'hidden';
  contentState: string = 'visible';
  mediaMatcher: MediaQueryList;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.initMatcher();
    this.getItems();
  }

  getItems() {
    this.dataService.getData('nav-menu').subscribe(
      (data: { navMenuItems: NavMenuItem[] }) => {
        this.navMenuItems = data.navMenuItems;
      },
      error => {
        console.error(error);
      }
    );
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
    this.isHamburgerActive = !this.isHamburgerActive;
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
