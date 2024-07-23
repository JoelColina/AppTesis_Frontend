import { CanActivateFn } from '@angular/router';

export const acountGuard: CanActivateFn = (route, state) => {
  return true;
};
