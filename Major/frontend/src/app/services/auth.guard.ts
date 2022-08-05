import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     let user=JSON.parse(sessionStorage.getItem('user')) || JSON.parse(localStorage.getItem('user'));
      console.log(route);
      console.log(state);
    if(user && user.role=='user' && state.url.indexOf("admin") <0)
    {
      return true;
    }
    else if(user && user.role=='admin')
    {
      return true;
    }
    else{
      
      return false;
    }
  
  }
  
}
