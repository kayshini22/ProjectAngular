import { TestBed } from '@angular/core/testing';

import { ReturnticketService } from './returnticket.service';

describe('ReturnticketService', () => {
  let service: ReturnticketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReturnticketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
