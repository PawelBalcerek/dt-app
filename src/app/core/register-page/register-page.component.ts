import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from 'src/app/shared/models/User.model';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  private user:User = {email:"", name:"", password:""};
  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  register(){
    this.authService.register( this.user ); 
    this.user= {email:"", name:"", password:""};
  }

}
