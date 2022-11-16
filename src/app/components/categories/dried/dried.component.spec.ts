import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriedComponent } from './dried.component';

describe('DriedComponent', () => {
  let component: DriedComponent;
  let fixture: ComponentFixture<DriedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
