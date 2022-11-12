import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialDataComponent } from './trial-data.component';

describe('TrialDataComponent', () => {
  let component: TrialDataComponent;
  let fixture: ComponentFixture<TrialDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrialDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
