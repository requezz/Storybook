import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanizeComponent } from './humanize.component';

describe('HumanizeComponent', () => {
  let component: HumanizeComponent;
  let fixture: ComponentFixture<HumanizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
