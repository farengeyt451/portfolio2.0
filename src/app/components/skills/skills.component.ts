import { Component, OnInit, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent implements OnInit, AfterViewInit {
  @ViewChild('skills') skills: ElementRef;

  tippyOptions = {
    placement: 'top',
    arrow: false,
    animation: 'shift-toward',
    theme: 'skill',
    trigger: 'mouseenter',
    delay: [100, 100],
    flipOnUpdate: true,
    sticky: true
  };

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.renderer.setStyle(this.skills.nativeElement, 'opacity', '1');
    }, 100);
  }
}
