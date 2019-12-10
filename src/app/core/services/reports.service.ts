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

  constructor(private http: HttpClient) { }

  getAverageEnpointsExecutionTimes(testId: number){
    let api = environment.testsApiUrl + "/Reports/GetAverageEndpointsExecutionTimes";
    let params = new HttpParams(); 
    params = params.append('testParametersId', String(testId));
    this.http.get<Reports.GetAverageEndpointsExecutionTimesResponseModel>(api, {params: params})
      .subscribe(response=>{
        this._averageEndpointsExecutionTimes.next( response.averageEndpointsExecutionTimes );
      })
  }

}
