import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SwiperComponent } from 'ngx-swiper-wrapper';
import { swiperConfig } from './swiper.config';
import { ProjectData } from '@interfaces/projects.interfaces';
import { DataService } from '@modules/core/services/data.service';

@Component({
  selector: 'app-works-index',
  templateUrl: './works-index.component.html',
  styleUrls: ['./works-index.component.sass']
})
export class WorksIndexComponent implements OnInit {
  @ViewChild('swiperComponent', { read: SwiperComponent, static: false })
  swiperRef: SwiperComponent;
  projects: ProjectData[];
  swiperConfig = swiperConfig;
  worksTitle: string = 'Works';

  constructor(private titleService: Title, private dataService: DataService) {}

  ngOnInit() {
    this.titleService.setTitle(this.worksTitle);
    this.getItems();
  }

  getItems() {
    this.dataService.getData('projects').subscribe(
      (data: { projects: ProjectData[] }) => {
        this.sortProjectsByYear(data.projects);
      },
      error => {
        console.error(error);
      }
    );
  }

  sortProjectsByYear(projects: ProjectData[]) {
    this.projects = projects.sort((a, b) => b.year - a.year);
  }

  onSwiperInit() {
    this.initLazyLoadOnSwiper();
  }

  initLazyLoadOnSwiper() {
    this.swiperRef?.directiveRef?.update();
    this.swiperRef?.directiveRef?.swiper().lazy.load();
  }
}
