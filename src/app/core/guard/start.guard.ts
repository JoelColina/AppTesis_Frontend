import { CanActivateFn } from '@angular/router';

export const startGuard: CanActivateFn = (route, state) => {
  return true;
};
