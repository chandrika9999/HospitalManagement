import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorPatientComponent } from './donor-patient.component';

describe('DonorPatientComponent', () => {
  let component: DonorPatientComponent;
  let fixture: ComponentFixture<DonorPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DonorPatientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DonorPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
