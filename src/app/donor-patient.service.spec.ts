import { TestBed } from '@angular/core/testing';

import { DonorPatientService } from './donor-patient.service';

describe('DonorPatientService', () => {
  let service: DonorPatientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonorPatientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
