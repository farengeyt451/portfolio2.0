import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
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

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.projects = projects;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.renderer.setStyle(this.portfolio.nativeElement, 'opacity', '1');
    }, 100);
  }
}
