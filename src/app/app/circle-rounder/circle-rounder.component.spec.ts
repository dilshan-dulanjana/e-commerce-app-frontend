import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleRounderComponent } from './circle-rounder.component';

describe('CircleRounderComponent', () => {
  let component: CircleRounderComponent;
  let fixture: ComponentFixture<CircleRounderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CircleRounderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircleRounderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
