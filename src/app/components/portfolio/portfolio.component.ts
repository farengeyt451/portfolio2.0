import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { swiperConfig } from './swiper.config';
import { projects } from './projects';
import { Project } from '../../interfaces/portfolio.interface';
import { SwiperComponent } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent implements OnInit {
  swiperConfig = swiperConfig;
  projects: Array<Project>;
  @ViewChild(SwiperComponent) componentRef?: SwiperComponent;

  constructor() {}

  ngOnInit() {
    this.projects = projects;
  }
}
