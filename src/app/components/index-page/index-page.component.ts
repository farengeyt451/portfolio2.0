import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { gradient } from '../../../assets/js/gradient.js';
import { particle } from '../../../assets/js/particle.js';
// import { particleParams, particleStyles } from './particle.config';
import { ZenService } from '../../services/zen.service';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.sass']
})
export class IndexPageComponent implements OnInit, AfterViewInit {
  // particleStyles: object = particleStyles;
  // particleParams: object = particleParams;
  contentState: string = 'visible';
  zenSubscribtion: Subscription;
  zenState: boolean;

  constructor(private zen: ZenService) {}

  ngOnInit() {
    this.zenSubscribtion = this.zen.currentZenState.subscribe(zenState => {
      this.zenState = zenState;
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      gradient();
      particle();
    }, 0);
  }

  onContentStateChange(contentState: string) {
    this.contentState = contentState;
  }

  onCloseZen() {
    this.zenState = true;
  }
}
