import { TestBed } from '@angular/core/testing';

import { CancelticketService } from './cancelticket.service';

describe('CancelticketService', () => {
  let service: CancelticketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CancelticketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
