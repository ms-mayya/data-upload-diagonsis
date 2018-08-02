import { TestBed, async, inject } from '@angular/core/testing';

import { AwareAuthenticationGuard } from './aware-authentication.guard';

describe('AwareAuthenticationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AwareAuthenticationGuard]
    });
  });

  it('should ...', inject([AwareAuthenticationGuard], (guard: AwareAuthenticationGuard) => {
    expect(guard).toBeTruthy();
  }));
});
