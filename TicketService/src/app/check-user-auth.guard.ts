import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckUserAuthGuard implements CanActivate {

  constructor(private route : Router){}

  canActivate(): boolean {
    if(sessionStorage.getItem('userLoggedIn') !== null)
    return true;
    else
    {
      this.route.navigate(['LoginUser']);
      return false;
    }
  }
  
}
