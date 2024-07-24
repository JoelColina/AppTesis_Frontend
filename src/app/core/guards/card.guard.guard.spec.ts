import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { cardGuardGuard } from './card.guard.guard';

describe('cardGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => cardGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
