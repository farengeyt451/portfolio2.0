import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  mainTitle: string = 'Portfolio - Alexander Kislov';

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(this.mainTitle);
  }
}
