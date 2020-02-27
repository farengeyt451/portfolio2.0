import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgxTippyProps } from 'ngx-tippy-wrapper';
import { SkillsData, SkillItem } from '@interfaces/skills.interfaces';
import { KeyValue } from '@angular/common';
import { DataService } from '@modules/core/services/data.service';

@Component({
  selector: 'app-skills-index',
  templateUrl: './skills-index.component.html',
  styleUrls: ['./skills-index.component.sass']
})
export class SkillsIndexComponent implements OnInit {
  skillsTitle: string = 'Skills';
  skills: SkillsData;
  selectedTab: number = 0;

  tippyProps: NgxTippyProps = {
    placement: 'top',
    arrow: true,
    distance: 15,
    animation: 'shift-toward',
    theme: 'light skill',
    delay: [250, 250]
  };

  constructor(private titleService: Title, private dataService: DataService) {}

  ngOnInit() {
    this.titleService.setTitle(this.skillsTitle);
    this.getItems();
  }

  getItems() {
    this.dataService.getData('skills').subscribe(
      (data: { skills: SkillsData }) => {
        this.skills = data.skills;
      },
      error => {
        console.error(error);
      }
    );
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
