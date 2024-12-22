import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoardHomeComponent } from './dash-board-home.component';

describe('DashBoardHomeComponent', () => {
  let component: DashBoardHomeComponent;
  let fixture: ComponentFixture<DashBoardHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashBoardHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashBoardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
