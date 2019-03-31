import { Component, OnInit } from '@angular/core';
import { swiperConfig } from './swiper.config';
import { projects } from './projects';
import { Project } from '../../interfaces/portfolio.interface';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent implements OnInit {
  swiperConfig = swiperConfig;
  projects: Array<Project>;

  constructor() {}

  ngOnInit() {
    this.projects = projects;
  }
}
