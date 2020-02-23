import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { gradient } from '../../../assets/js/gradient.js';
import { particle } from '../../../assets/js/particle.js';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.sass']
})
export class IndexPageComponent implements OnInit, AfterViewInit {
  contentState: string = 'visible';
  zenSubscribtion: Subscription;
  zenState: boolean;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {
      // gradient();
      // particle();
    }, 0);
  }

  onContentStateChange(contentState: string) {
    this.contentState = contentState;
  }

  onCloseZen() {
    this.zenState = true;
  }
}
