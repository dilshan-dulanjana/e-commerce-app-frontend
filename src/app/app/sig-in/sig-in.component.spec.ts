import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigINComponent } from './sig-in.component';

describe('SigINComponent', () => {
  let component: SigINComponent;
  let fixture: ComponentFixture<SigINComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigINComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigINComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
