import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('home') home: ElementRef;
  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.renderer.setStyle(this.home.nativeElement, 'opacity', '1');
    }, 100);
  }
}
