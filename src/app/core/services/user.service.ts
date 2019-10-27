import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/User.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user: BehaviorSubject<User> = new BehaviorSubject(null);
  public readonly user_0: Observable<User> = this._user.asObservable();
  
  constructor() {
    
  }

  getUser(){
    let user: User = {email: 'test@gmail.com', name:'test'}; 
    this._user.next( user );

  }

  
}
