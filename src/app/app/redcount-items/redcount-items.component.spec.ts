import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedcountItemsComponent } from './redcount-items.component';

describe('RedcountItemsComponent', () => {
  let component: RedcountItemsComponent;
  let fixture: ComponentFixture<RedcountItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedcountItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedcountItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
