import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashProfileComponent } from './dash-profile.component';

describe('DashProfileComponent', () => {
  let component: DashProfileComponent;
  let fixture: ComponentFixture<DashProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
