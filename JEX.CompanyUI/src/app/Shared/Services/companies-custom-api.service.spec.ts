import { TestBed } from '@angular/core/testing';

import { CompaniesCustomApiService } from './companies-custom-api.service';

describe('CompaniesCustomApiService', () => {
  let service: CompaniesCustomApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompaniesCustomApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
