import { Component, OnInit } from '@angular/core';
import { skills } from './skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent implements OnInit {
  skills;

  tippyOptions = {
    placement: 'top',
    arrow: false,
    animation: 'shift-toward',
    theme: 'skill',
    trigger: 'mouseenter'
  };

  constructor() {}

  ngOnInit() {
    this.skills = skills;
  }
}
