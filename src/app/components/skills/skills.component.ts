import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent implements OnInit {
  tippyOptions = {
    placement: 'top',
    arrow: false,
    animation: 'shift-toward',
    theme: 'skill',
    trigger: 'mouseenter',
    delay: [200, 50]
  };
  navSubscription$: Subscription;
  menuState: string;
  skillsTitle: string = 'Skills';
  selectedTab = 0;

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(this.skillsTitle);
  }

  onTabSelect(index: number) {
    this.selectedTab = index;
  }

  onSwipeLeft() {
    if (this.selectedTab !== 6) {
      this.selectedTab = this.selectedTab + 1;
    }
  }

  onSwipeRight() {
    if (this.selectedTab !== 0) {
      this.selectedTab = this.selectedTab - 1;
    }
  }
}
