import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SwiperComponent } from 'ngx-swiper-wrapper';
import { swiperConfig } from './swiper.config';
// import { projects } from './projects';
import { ProjectData } from '../../interfaces/portfolio.interfaces';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent implements OnInit {
  swiperConfig = swiperConfig;
  projects: Array<ProjectData>;
  worksTitle: string = 'Projects';
  @ViewChild(SwiperComponent) componentRef?: SwiperComponent;

  constructor(private titleService: Title) {}

  ngOnInit() {
    // this.projects = projects;
    this.titleService.setTitle(this.worksTitle);
  }
}
