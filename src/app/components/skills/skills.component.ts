import { Component, OnInit } from '@angular/core';

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
    flipOnUpdate: true,
    sticky: true
  };

  constructor() {}

  ngOnInit() {}
}
