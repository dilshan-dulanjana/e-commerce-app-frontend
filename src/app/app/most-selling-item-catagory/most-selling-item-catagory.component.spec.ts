import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostSellingItemCatagoryComponent } from './most-selling-item-catagory.component';

describe('MostSellingItemCatagoryComponent', () => {
  let component: MostSellingItemCatagoryComponent;
  let fixture: ComponentFixture<MostSellingItemCatagoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostSellingItemCatagoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostSellingItemCatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
