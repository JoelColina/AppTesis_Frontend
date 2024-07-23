import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { acountGuard } from './acount.guard';

describe('acountGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => acountGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
