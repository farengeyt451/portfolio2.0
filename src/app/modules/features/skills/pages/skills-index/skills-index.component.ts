import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgxTippyProps } from 'ngx-tippy-wrapper';
import { skills } from '@fixtures/skills.fixtures';
import { SkillsData, SkillItem } from '@interfaces/skills.interfaces';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-skills-index',
  templateUrl: './skills-index.component.html',
  styleUrls: ['./skills-index.component.sass']
})
export class SkillsIndexComponent implements OnInit {
  skills: SkillsData = skills;

  tippyProps: NgxTippyProps = {
    placement: 'top',
    arrow: true,
    distance: 15,
    animation: 'shift-toward',
    theme: 'light skill',
    delay: [250, 250]
  };
  skillsTitle: string = 'Skills';
  selectedTab = 0;

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(this.skillsTitle);
  }

  originalOrder = (
    a: KeyValue<string, { items: SkillItem[] }>,
    b: KeyValue<string, { items: SkillItem[] }>
  ): number => {
    return 0;
  };

  onTabSelect(index: number) {
    this.selectedTab = index;
  }
}
