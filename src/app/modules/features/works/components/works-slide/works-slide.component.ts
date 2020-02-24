import { Component, OnInit, Input } from '@angular/core';
import { ProjectData } from '@interfaces/projects.interfaces';

@Component({
  selector: 'app-works-slide',
  templateUrl: './works-slide.component.html',
  styleUrls: ['./works-slide.component.sass']
})
export class WorksSlideComponent implements OnInit {
  @Input() slideData: ProjectData;

  constructor() {}

  ngOnInit() {}
}
