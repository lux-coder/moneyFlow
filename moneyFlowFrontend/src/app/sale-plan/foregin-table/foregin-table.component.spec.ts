import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeginTableComponent } from './foregin-table.component';

describe('ForeginTableComponent', () => {
  let component: ForeginTableComponent;
  let fixture: ComponentFixture<ForeginTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForeginTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForeginTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
