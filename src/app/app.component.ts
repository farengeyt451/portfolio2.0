import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  mainTitle: string = 'Portfolio - Alexander Kislov';

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(this.mainTitle);
  }
}
