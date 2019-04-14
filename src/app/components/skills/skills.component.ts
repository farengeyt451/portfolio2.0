import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent implements OnInit {
  tippyOptions = {
    arrow: true,
    animation: 'shift-toward',
    theme: 'skill'
  };
  constructor() {}

  ngOnInit() {}
}
