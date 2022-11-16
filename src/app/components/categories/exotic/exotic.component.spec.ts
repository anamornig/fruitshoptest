import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoticComponent } from './exotic.component';

describe('ExoticComponent', () => {
  let component: ExoticComponent;
  let fixture: ComponentFixture<ExoticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExoticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
