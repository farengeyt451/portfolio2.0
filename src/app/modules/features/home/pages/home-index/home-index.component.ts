import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.sass']
})
export class HomeIndexComponent implements OnInit {
  mainTitle: string = 'Portfolio — Alexander Kislov';

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(this.mainTitle);
  }
}
