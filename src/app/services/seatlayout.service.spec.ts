import { TestBed } from '@angular/core/testing';

import { SeatlayoutService } from './seatLayout.service';

describe('SeatlayoutService', () => {
  let service: SeatlayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeatlayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
