import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ZenService } from 'src/app/services/zen.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  mainTitle: string = 'Portfolio - Alexander Kislov';

  constructor(private titleService: Title, private zen: ZenService) {}

  ngOnInit() {
    this.titleService.setTitle(this.mainTitle);
  }

  onRelaxClick() {
    this.zen.changeCurrentZenState(false);
  }
}
