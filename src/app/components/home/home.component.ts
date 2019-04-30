import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { showHero } from './home.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  animations: [showHero]
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('home') home: ElementRef;
  heroState: string = 'hidden';

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {
      // this.renderer.setStyle(this.home.nativeElement, 'opacity', '1');
      this.heroState = this.heroState === 'hidden' ? 'showen' : 'hidden';
    }, 200);
  }
}
