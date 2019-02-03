import { TestBed } from '@angular/core/testing';

import { FundingService } from './funding.service';

describe('ElevatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FundingService = TestBed.get(FundingService);
    expect(service).toBeTruthy();
  });
});
