import { TestBed, inject } from '@angular/core/testing';

import { StockService } from './stock.service';

describe('StockserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockService]
    });
  });

  it('should ...', inject([StockService], (service: StockService) => {
    expect(service).toBeTruthy();
  }));
});
