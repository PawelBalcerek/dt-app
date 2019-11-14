import { TestBed } from '@angular/core/testing';

import { SellOffersService } from './sell-offers.service';

describe('SellOffersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SellOffersService = TestBed.get(SellOffersService);
    expect(service).toBeTruthy();
  });
});
