import { TestBed } from '@angular/core/testing';

import { EmergencyAlertService } from './emergency-alert.service';

describe('EmergencyAlertService', () => {
  let service: EmergencyAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmergencyAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
