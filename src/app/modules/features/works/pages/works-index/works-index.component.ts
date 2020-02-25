import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SwiperComponent } from 'ngx-swiper-wrapper';
import { swiperConfig } from './swiper.config';
import { projects } from '@fixtures/projects.fixtures';
import { ProjectData } from '@interfaces/projects.interfaces';

@Component({
  selector: 'app-works-index',
  templateUrl: './works-index.component.html',
  styleUrls: ['./works-index.component.sass']
})
export class WorksIndexComponent implements OnInit, AfterViewInit {
  @ViewChild('swiperComponent', { read: SwiperComponent, static: false })
  swiperRef: SwiperComponent;
  projects: ProjectData[];
  swiperConfig = swiperConfig;
  worksTitle: string = 'Works';

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(this.worksTitle);
    this.sortProjectsByYear();
  }

  ngAfterViewInit() {
    this.projects && this.initLazyLoadOnSwiper();
  }

  sortProjectsByYear() {
    this.projects = projects.sort((a, b) => b.year - a.year);
  }

  initLazyLoadOnSwiper() {
    setTimeout(() => {
      this.swiperRef?.directiveRef?.update();
      this.swiperRef?.directiveRef?.swiper().lazy.load();
    }, 0);
  }
}
