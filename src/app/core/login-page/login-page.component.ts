import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  email: string = "";
  password: string = "";

  loginFailure:boolean = false;
  private route$:Subscription

  constructor(private authService: AuthService, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.authService.checkAuth();
    
    this.route$ = this.route.queryParamMap
      .subscribe((params)=>{
        if(params.has('loginFailure')){
          this.loginFailure = params.get('loginFailure')=='true';
          this.password = "";
        }
      })
  }

  login(){
    this.authService.login(this.email, this.password );
  }

  ngOnDestroy(){
    this.route$.unsubscribe();
  }
}
