import { TestBed } from '@angular/core/testing';

import { ReturnfareService } from './returnfare.service';

describe('ReturnfareService', () => {
  let service: ReturnfareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReturnfareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
