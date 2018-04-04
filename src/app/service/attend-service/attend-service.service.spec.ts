import { TestBed, inject } from '@angular/core/testing';

import { AttendServiceService } from './attend-service.service';

describe('AttendServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AttendServiceService]
    });
  });

  it('should be created', inject([AttendServiceService], (service: AttendServiceService) => {
    expect(service).toBeTruthy();
  }));
});
