import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { swiperConfig } from './swiper.config';
import { projects } from './projects';
import { Project } from '../../interfaces/portfolio.interface';
import { SwiperComponent } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  swiperConfig = swiperConfig;
  projects: Array<Project>;
  @ViewChild(SwiperComponent) componentRef?: SwiperComponent;
  @ViewChild('portfolio') portfolio: ElementRef;

  constructor() {}

  ngOnInit() {
    this.projects = projects;
  }

  ngAfterViewInit() {
    console.log(this.portfolio);
    setTimeout(() => {
      this.portfolio.nativeElement.style.opacity = 1;
    }, 1000);
    // const swiper = document.querySelector('.swiper-container');
    // swiper['swiper'].loopCreate();
  }
}
