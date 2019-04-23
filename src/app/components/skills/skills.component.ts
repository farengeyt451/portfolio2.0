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
    arrow: true,
    animation: 'shift-toward',
    theme: 'skill'
  };
  constructor() {}

  ngOnInit() {
    this.skills = skills;
  }
}
