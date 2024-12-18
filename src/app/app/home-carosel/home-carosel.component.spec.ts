import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCaroselComponent } from './home-carosel.component';

describe('HomeCaroselComponent', () => {
  let component: HomeCaroselComponent;
  let fixture: ComponentFixture<HomeCaroselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCaroselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCaroselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
