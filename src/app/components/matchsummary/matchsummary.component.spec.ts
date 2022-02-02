import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchsummaryComponent } from './matchsummary.component';

describe('MatchsummaryComponent', () => {
  let component: MatchsummaryComponent;
  let fixture: ComponentFixture<MatchsummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchsummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
