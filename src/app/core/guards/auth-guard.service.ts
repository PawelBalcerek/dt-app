import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public authService: AuthService) { }

  canActivate():boolean{
    const auth = this.authService.isAuthenticated();
    return auth;
  }

}
