/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WorksSlideComponent } from './works-slide.component';

describe('WorksSlideComponent', () => {
  let component: WorksSlideComponent;
  let fixture: ComponentFixture<WorksSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
