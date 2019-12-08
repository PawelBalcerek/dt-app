import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Tests } from 'src/app/shared/models/Tests/tests';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Testservice {
  private testsParameters: BehaviorSubject<Tests.TestParameters[]> = new BehaviorSubject([]);
  public readonly testsParametersObservable: Observable<Tests.TestParameters[]> = this.testsParameters.asObservable();

  private runTestResult: Subject<boolean> = new Subject();
  public readonly runTestResultObservable = this.runTestResult.asObservable();

  constructor(private httpClient: HttpClient) {}

  public getTestsParameters() {
    this.httpClient.get<Tests.GetTestsParametersResponse>(environment.testsApiUrl + '/TestsParameters').subscribe(res => {
        this.testsParameters.next(res.testsParameters);
      });
  }

  public runTest(testParametersId: number) {
    const request: Tests.RunTestRequest = { testParametersId };
    this.httpClient.post<void>(environment.testsApiUrl + '/Tests/RunTest', request).subscribe(() => {
        this.runTestResult.next(true);
      }, () => {
        this.runTestResult.next(false);
      });
  }
}
