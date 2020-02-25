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
  skillsTitle: string = 'Skills';
  skills: SkillsData = skills;
  selectedTab: number = 0;

  tippyProps: NgxTippyProps = {
    placement: 'top',
    arrow: true,
    distance: 15,
    animation: 'shift-toward',
    theme: 'light skill',
    delay: [250, 250]
  };

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
