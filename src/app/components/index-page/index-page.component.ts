import { Component, OnInit, AfterViewInit } from '@angular/core';
import { gradient } from 'src/assets/js/gradient.js';
import { particleParams, particleStyles } from './particle.config';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.sass']
})
export class IndexPageComponent implements OnInit, AfterViewInit {
  particleStyles: object = particleStyles;
  particleParams: object = particleParams;
  // menuState: string;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    // gradient();
  }

  menuState(e) {
    console.log(e);
  }
}
