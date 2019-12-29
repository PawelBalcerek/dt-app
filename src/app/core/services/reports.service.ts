import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Reports } from "src/app/shared/models/Tests/reports";
import { environment } from "src/environments/environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: "root"
})
export class ReportsService {
  private _averageEndpointsExecutionTimes: BehaviorSubject<Reports.AverageEndpointsExecutionTime[]> = new BehaviorSubject([]);
  public averageEndpointsExecutionTimes_0 = this._averageEndpointsExecutionTimes.asObservable();

  private _endpoints: BehaviorSubject<Reports.Endpoint[]> = new BehaviorSubject([]);
  public enpoints_0 = this._endpoints.asObservable();

  private _usersEndpointExecutionTimes: BehaviorSubject<Reports.UserEndpointExecutionTimes[]> = new BehaviorSubject([]);
  public usersEndpointExecutionTimes_0 = this._usersEndpointExecutionTimes.asObservable();


  constructor(private http: HttpClient) {}

  getAverageEnpointsExecutionTimes(testId: number) {
    let api = environment.testsApiUrl + "/Reports/GetAverageEndpointsExecutionTimes";
    let params = new HttpParams();
    params = params.append("testParametersId", String(testId));
    this.http.get<Reports.GetAverageEndpointsExecutionTimesResponseModel>(api, {params: params}).subscribe(
        response => {
          this._averageEndpointsExecutionTimes.next(
            response.averageEndpointsExecutionTimes
          );
        },
        error => {
          this._averageEndpointsExecutionTimes.next([]);
        }
      );
  }

  getEndpoints() {
    const api = environment.testsApiUrl + "/Endpoints";
    this.http.get<Reports.GetEndpointsResponseModel>(api).subscribe(
      response => {
        this._endpoints.next(response.endpoints);
      },
      eroor => {
        this._endpoints.next([]);
      }
    );
  }

  getUsersEndpointExecutionTimes(testParametersId: number, endpointId: number) {
    const api = environment.testsApiUrl + "/Reports/GetUsersEndpointExecutionTimes";
    let params = new HttpParams();
    params = params.append("testParametersId", String(testParametersId));
    params = params.append("endpointId", String(endpointId));

    this.http.get<Reports.GetUsersEndpointExecutionTimes>(api, { params: params }).subscribe(
        response => {
          this._usersEndpointExecutionTimes.next(
            response.usersEndpointExecutionTimes
          );
        },
        error => {
          this._usersEndpointExecutionTimes.next([]);
        }
      );
  }

  clearUsersEndpointExecutionTimes() {
    this._usersEndpointExecutionTimes.next([]);
  }

  clearAverageEnpointsExecutionTimes() {
    this._averageEndpointsExecutionTimes.next([]);
  }

  getAverageEnpointsExecutionTimesCsv(testParametersId: number) {
    const api = environment.testsApiUrl + '/Reports/GetAverageEndpointsExecutionTimesCsv';
    let params = new HttpParams();
    params = params.append('testParametersId', String(testParametersId));

    this.http.get<Reports.GetUsersEndpointExecutionTimes>(api, { params: params, observe: 'response', responseType: 'arraybuffer' as 'json'}).subscribe(response => {
          this.downloadFile(response, 'text/csv');
        });
  }

  getUsersEndpointsExecutionTimesCsv(testParametersId: number) {
    const api = environment.testsApiUrl + '/Reports/GetUsersEndpointsExecutionTimesCsv';
    let params = new HttpParams();
    params = params.append('testParametersId', String(testParametersId));

    this.http.get<Reports.GetUsersEndpointExecutionTimes>(api, { params: params, observe: 'response', responseType: 'arraybuffer' as 'json'}).subscribe(response => {
          this.downloadFile(response, 'application/zip');
        });
  }


  private downloadFile(response: any, contentType: string) {
    const fileName = this.getFileNameFromHeaders(response.headers);
    const blob = new Blob([response.body], { type: contentType });
    saveAs(blob, fileName);
  }

  private getFileNameFromHeaders(headers: any) {
    const contentDisposition: string = headers.get('content-disposition');
    return contentDisposition.split(';')[1].replace('filename=', '').trim();
  }
}
