import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutcomeHomeComponent } from './outcome-home.component';

describe('OutcomeHomeComponent', () => {
  let component: OutcomeHomeComponent;
  let fixture: ComponentFixture<OutcomeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutcomeHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutcomeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
