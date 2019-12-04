import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Tests } from 'src/app/shared/models/Tests/tests';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Testservice {
  private testsParameters: BehaviorSubject<Tests.TestParameters[]> = new BehaviorSubject([]);
  public readonly testsParametersObservable: Observable<Tests.TestParameters[]> = this.testsParameters.asObservable();

  constructor(private httpClient: HttpClient) { }

  public getTestsParameters() {
    this.httpClient.get<Tests.GetTestsParametersResponse>(environment.testsApiUrl + '/TestsParameters').subscribe(res => {
        this.testsParameters.next( res.testsParameters );
      });
  }
}
