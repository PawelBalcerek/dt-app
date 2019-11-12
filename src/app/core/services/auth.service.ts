import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { BehaviorSubject } from 'rxjs';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private JWT_KEY = "JWT";
  private authenticated: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public readonly authenticated_0 = this.authenticated.asObservable();

  constructor(private http: HttpClient, 
              private router: Router) { }

  public login(email:string, password: string){
    let api = environment.apiUrl + "login"
    this.http.post(api, {email: email, password: password})
      .subscribe((data:any)=>{
        let jwtToken = data.jwttoken;
        console.log("jwt: " + jwtToken);
        this.setJWT( jwtToken );
        this.authenticated.next( true );

        this.router.navigate(["/main/user"]);
      })
  }

  public checkAuth(){
    if(localStorage.getItem(this.JWT_KEY)!=null){
      this.authenticated.next( true );
    }else{
      this.authenticated.next( false );
    }
  }

  public logout(){
    let api = environment.apiUrl + "logout"
    this.http.get(api)
      .subscribe((data:any)=>{
        this.deleteJWT();
        this.authenticated.next( false );
        this.router.navigate(["/login"]);
      },
      (error)=>{
        this.router.navigate(["/login"]);
        this.deleteJWT();
        this.authenticated.next( false );
      })
  } 

  public getJWT():string {
    return localStorage.getItem( this.JWT_KEY );
  }

  private setJWT(jwt: string){
    localStorage.setItem(this.JWT_KEY, jwt);
  }

  private deleteJWT(){
    if(localStorage.getItem(this.JWT_KEY)){
      localStorage.removeItem( this.JWT_KEY );
    }
  }
}
