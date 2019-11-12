import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  private email: string = "";
  private password: string = "";

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.checkAuth();
  }

  login(){
    this.authService.login(this.email, this.password );
  }
}
