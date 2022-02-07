import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointslandingComponent } from './pointslanding.component';

describe('PointslandingComponent', () => {
  let component: PointslandingComponent;
  let fixture: ComponentFixture<PointslandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointslandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointslandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
