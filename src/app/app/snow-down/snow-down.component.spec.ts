import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowDownComponent } from './snow-down.component';

describe('SnowDownComponent', () => {
  let component: SnowDownComponent;
  let fixture: ComponentFixture<SnowDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnowDownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnowDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
