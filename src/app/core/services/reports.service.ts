import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Reports } from 'src/app/shared/models/Tests/reports';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  private _averageEndpointsExecutionTimes: BehaviorSubject<Reports.AverageEndpointsExecutionTime[]> = new BehaviorSubject([]);
  public averageEndpointsExecutionTimes_0 = this._averageEndpointsExecutionTimes.asObservable(); 

  private _endpoints: BehaviorSubject<Reports.Endpoint[]> = new BehaviorSubject([]);
  public enpoints_0 = this._endpoints.asObservable();

  private _usersEndpointExecutionTimes: BehaviorSubject<Reports.UserEndpointExecutionTimes[]> = new BehaviorSubject([]);
  public usersEndpointExecutionTimes_0 = this._usersEndpointExecutionTimes.asObservable();

  constructor(private http: HttpClient) { }

  getAverageEnpointsExecutionTimes(testId: number){
    let api = environment.testsApiUrl + "/Reports/GetAverageEndpointsExecutionTimes";
    let params = new HttpParams(); 
    params = params.append('testParametersId', String(testId));
    this.http.get<Reports.GetAverageEndpointsExecutionTimesResponseModel>(api, {params: params})
      .subscribe(response=>{
        this._averageEndpointsExecutionTimes.next( response.averageEndpointsExecutionTimes );
      },
      (error)=>{
        this._averageEndpointsExecutionTimes.next( [] );
      }
      )
  }

  getEndpoints(){
    const api = environment.testsApiUrl + "/Endpoints";
    this.http.get<Reports.GetEndpointsResponseModel>(api)
      .subscribe( response=> {
        this._endpoints.next( response.endpoints );
      }, 
      (eroor)=>{
        this._endpoints.next( [] );
      })
  }

  getUsersEndpointExecutionTimes(testParametersId: number, endpointId: number){
    const api = environment.testsApiUrl + "/Reports/GetUsersEndpointExecutionTimes";
    let params = new HttpParams(); 
    params = params.append('testParametersId', String(testParametersId));
    params = params.append('endpointId', String(endpointId)); 

    this.http.get<Reports.GetUsersEndpointExecutionTimes>(api, {params: params})
      .subscribe( response=>{ 
        this._usersEndpointExecutionTimes.next( response.usersEndpointExecutionTimes );
      }, 
      (error)=>{
        this._usersEndpointExecutionTimes.next([]);
      }
      )
  }

  clearUsersEndpointExecutionTimes(){
    this._usersEndpointExecutionTimes.next([]);
  }

  clearAverageEnpointsExecutionTimes(){
    this._averageEndpointsExecutionTimes.next([]);
  }


}
