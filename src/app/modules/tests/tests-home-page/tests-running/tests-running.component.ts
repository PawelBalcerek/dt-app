import { Testservice } from './../../../../core/services/tests.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Tests } from 'src/app/shared/models/Tests/tests';
import { MessageType } from 'src/app/shared/models/enums/message-type.enum';

@Component({
  selector: 'app-tests-running',
  templateUrl: './tests-running.component.html',
  styleUrls: ['./tests-running.component.css']
})
export class TestsRunningComponent implements OnInit, OnDestroy {
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
  runTestSub: Subscription;

  messageBox: Tests.MessageBox;

  runTestLoader = false;

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

  runTest(testParametersId: number) {
    this.messageBox = undefined;
    this.runTestLoader = true;
    this.testservice.runTest(testParametersId);
    this.runTestSub = this.testservice.runTestResultObservable.subscribe((success) => {
      if (success) {
        this.messageBox = {
          type: MessageType.Success,
          message: 'Test successful'
        };
      } else {
        this.messageBox = {
          type: MessageType.Error,
          message: 'Test failed'
        };
      }
      this.runTestLoader = false;
    });
  }

  ngOnDestroy(): void {
    if (this.testsParametersSub){
      this.testsParametersSub.unsubscribe();
    }
    if (this.runTestSub){
      this.runTestSub.unsubscribe();
    }
  }
}
