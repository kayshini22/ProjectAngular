import { TestBed } from '@angular/core/testing';

import { ReturnflightsService } from './returnflights.service';

describe('ReturnflightsService', () => {
  let service: ReturnflightsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReturnflightsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
