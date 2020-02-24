import { Component, OnInit, ViewChild, ComponentRef, AfterViewInit } from '@angular/core';
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
  projects: ProjectData[] = projects;
  swiperConfig = swiperConfig;
  worksTitle: string = 'Works';

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(this.worksTitle);
  }

  ngAfterViewInit() {
    this.initLazyLoadOnSwiper();
  }

  initLazyLoadOnSwiper() {
    setTimeout(() => {
      this.swiperRef?.directiveRef?.update();
      this.swiperRef?.directiveRef?.swiper().lazy.load();
    }, 0);
  }
}
