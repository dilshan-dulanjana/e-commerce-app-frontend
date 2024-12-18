import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarCategryComponent } from './sidebar-categry.component';

describe('SidebarCategryComponent', () => {
  let component: SidebarCategryComponent;
  let fixture: ComponentFixture<SidebarCategryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarCategryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarCategryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
