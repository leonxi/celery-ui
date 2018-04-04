import { TestBed, inject } from '@angular/core/testing';

import { ProjectCostServiceService } from './project-cost-service.service';

describe('ProjectCostServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectCostServiceService]
    });
  });

  it('should be created', inject([ProjectCostServiceService], (service: ProjectCostServiceService) => {
    expect(service).toBeTruthy();
  }));
});
