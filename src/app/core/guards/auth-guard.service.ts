import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(public authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    this.authService.checkAuth();
    const auth = this.authService.isAuthenticated();
    if (!auth) {
      this.router.navigate(["/login"]);
    }
    return auth;
  }
}
