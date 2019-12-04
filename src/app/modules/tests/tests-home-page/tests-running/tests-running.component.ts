import { Testservice } from './../../../../core/services/tests.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Tests } from 'src/app/shared/models/Tests/tests';

@Component({
  selector: 'app-tests-running',
  templateUrl: './tests-running.component.html',
  styleUrls: ['./tests-running.component.css']
})
export class TestsRunningComponent implements OnInit {
  testsParameters: Tests.TestParameters[] = [];
  selectedTestParametersId: number;

  displayedColumns: string[] = [
    'testParametersId',
    'testName',
    'numberOfUsers',
    'numberOfRequests',
    'minBuyPrice',
    'maxBuyPrice',
    'minSellPrice',
    'maxSellPrice'
  ];
  dataSource: Tests.TestParameters[] = [];
  testsParametersSub: Subscription;
  constructor(private testservice: Testservice) {}

  ngOnInit() {
    this.testservice.getTestsParameters();
    this.testsParametersSub = this.testservice.testsParametersObservable.subscribe(
      testsParameters => {
        if (testsParameters && testsParameters.length > 0 ) {
          this.testsParameters = testsParameters;
          this.selectedTestParametersId = this.testsParameters[0].testParametersId;
          this.dataSource = [this.testsParameters[0]];
        }
      }
    );
  }

  onTestParametersChanged() {
    this.dataSource = [this.testsParameters.find(item => item.testParametersId === this.selectedTestParametersId)];
  }
}
