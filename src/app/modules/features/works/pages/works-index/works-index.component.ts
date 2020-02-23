import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SwiperComponent } from 'ngx-swiper-wrapper';
import { swiperConfig } from './swiper.config';
import { projects } from '@fixtures/projects.fixtures';
import { ProjectData } from '@interfaces/portfolio.interfaces';

@Component({
  selector: 'app-works-index',
  templateUrl: './works-index.component.html',
  styleUrls: ['./works-index.component.sass']
})
export class WorksIndexComponent implements OnInit {
  @ViewChild(SwiperComponent) componentRef?: SwiperComponent;

  projects: ProjectData[] = projects;
  swiperConfig = swiperConfig;
  worksTitle: string = 'Projects';

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(this.worksTitle);
  }
}
