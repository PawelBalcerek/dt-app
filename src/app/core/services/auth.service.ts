import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { BehaviorSubject, Observable } from 'rxjs';
import { Route, Router } from '@angular/router';
import { User } from 'src/app/shared/models/User.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private JWT_KEY = "JWT";
  private authenticated: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public readonly authenticated_0 = this.authenticated.asObservable();

  private _user: BehaviorSubject<User> = new BehaviorSubject(null);
  public readonly user_0: Observable<User> = this._user.asObservable();


  constructor(private http: HttpClient, 
              private router: Router) { }

  public login(email:string, password: string){
    let api = environment.apiUrl + "login"
    this.http.post(api, {email: email, password: password})
      .subscribe((data:any)=>{
        let jwtToken = data.jwt;
        console.log("jwt: " + jwtToken);
        this.setJWT( jwtToken );
        this.authenticated.next( true );
        this.getUser(); 
        this.router.navigate(["/main/user"]);
      },(error)=>{
        this.router.navigate(["login"], {queryParams: {loginFailure:true}})
      })
  }

  public checkAuth(){
    if(localStorage.getItem(this.JWT_KEY)!=null){
      this.getUser();      
    }else{
      this.logout();
    }
  }

  public getUser(){
    let api = environment.apiUrl + "users"  
    this.http.get<User>(api)
      .subscribe((data:any)=>{
        let user:User = data.user;
        this._user.next( user );
        this.authenticated.next( true );
      }, 
      (error)=>{
        this.logout();
      })
  }

  public logoutUser(){
    let api = environment.apiUrl + "logout"
    this.http.get(api)
      .subscribe((data:any)=>{
        this.logout();
      },
      (error)=>{
        this.logout();
      })
  } 

  private logout(){
    this.authenticated.next( false );
    this._user.next( null );
    this.deleteJWT();
    this.router.navigate(["/login"]);
  }

  public register(user:User){
    let api = environment.apiUrl + "users"  
    this.http.post(api, user)
      .subscribe(()=>{
        this.router.navigate(["/login"])
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
