import { Component, OnInit, AfterViewInit, NgZone } from '@angular/core';
import { gradient } from 'src/assets/js/gradient.js';
import { particle } from 'src/assets/js/particle.js';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.sass']
})
export class IndexPageComponent implements OnInit, AfterViewInit {
  contentState: string = 'visible';

  constructor(public zone: NgZone) {}

  ngOnInit() {}

  ngAfterViewInit() {
    gradient();
    particle();
  }

  onContentStateChange(contentState: string) {
    this.zone.run(() => {
      this.contentState = contentState;
    });
  }
}
