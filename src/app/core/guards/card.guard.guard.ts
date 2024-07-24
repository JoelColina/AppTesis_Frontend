import { CanActivateFn } from '@angular/router';

export const cardGuardGuard: CanActivateFn = (route, state) => {
  return true;
};
