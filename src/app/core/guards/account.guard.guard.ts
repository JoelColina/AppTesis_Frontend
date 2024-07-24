import { CanActivateFn } from '@angular/router';

export const accountGuardGuard: CanActivateFn = (route, state) => {
  return true;
};
