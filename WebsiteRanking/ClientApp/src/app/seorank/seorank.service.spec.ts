import { TestBed } from '@angular/core/testing';

import { SeorankService } from './seorank.service';

describe('SeorankService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeorankService = TestBed.get(SeorankService);
    expect(service).toBeTruthy();
  });
});
