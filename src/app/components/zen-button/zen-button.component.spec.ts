import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZenButtonComponent } from './zen-button.component';

describe('ZenButtonComponent', () => {
  let component: ZenButtonComponent;
  let fixture: ComponentFixture<ZenButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZenButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZenButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
