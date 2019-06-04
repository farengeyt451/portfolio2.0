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
    delay: [100, 100],
    sticky: true
  };
  navSubscription$: Subscription;
  menuState: string;
  skillsTitle: string = 'Skills';

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(this.skillsTitle);
  }
}
