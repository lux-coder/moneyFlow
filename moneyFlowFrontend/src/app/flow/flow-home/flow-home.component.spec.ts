import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowHomeComponent } from './flow-home.component';

describe('FlowHomeComponent', () => {
  let component: FlowHomeComponent;
  let fixture: ComponentFixture<FlowHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
