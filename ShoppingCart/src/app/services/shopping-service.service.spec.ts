import { TestBed, inject } from '@angular/core/testing';

import { ShoppingService } from './shopping-service.service';

describe('ShoppingServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingService]
    });
  });

  it('should ...', inject([ShoppingService], (service: ShoppingService) => {
    expect(service).toBeTruthy();
  }));
});
