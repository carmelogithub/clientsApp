import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/auth';

export const authGuard: CanActivateFn = async (route, state) => {

  const servicio=inject(Auth);
  const router=inject(Router);
  const logged=await servicio.isAuthenticated();

if(logged){
 return true;
}
router.navigate(['/login']);
return false;
 
};
