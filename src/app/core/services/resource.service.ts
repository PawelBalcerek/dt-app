import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Resource } from 'src/app/shared/models/Resource.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private _resources: BehaviorSubject<Resource[]> = new BehaviorSubject([]);
  public resources_0: Observable<Resource[]> = this._resources.asObservable();

  constructor( private http: HttpClient) { }

  getResources(){
    const api = environment.apiUrl + "users/resources"
    
    this.http.get( api )
      .subscribe((data: any)=>{
        this._resources.next( data.resources );
      })
  }
}
