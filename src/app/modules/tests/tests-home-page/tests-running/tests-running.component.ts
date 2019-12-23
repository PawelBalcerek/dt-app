import { Testservice } from './../../../../core/services/tests.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
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
  runTestSub: Subscription;
  clearDbSub: Subscription;
  messageBox: Tests.MessageBox;
  runTestLoader = false;

  @Input()
  set TestsParameters(value: Tests.TestParameters[]) {
    if (value && value.length > 0) {
      this.testsParameters = value;
      this.selectedTestParametersId = this.testsParameters[0].testParametersId;
      this.dataSource = [this.testsParameters[0]];
    }
  }

  constructor(private testservice: Testservice) {}

  ngOnInit() {}

  onTestParametersChanged() {
    this.dataSource = [
      this.testsParameters.find(
        item => item.testParametersId === this.selectedTestParametersId
      )
    ];
  }

  runTest(testParametersId: number) {
    this.messageBox = undefined;
    this.runTestLoader = true;
    this.testservice.runTest(testParametersId);
    this.runTestSub = this.testservice.runTestResultObservable.subscribe(
      success => {
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
      }
    );
  }

  clearDatabase() {
    this.messageBox = undefined;
    this.runTestLoader = true;
    this.testservice.clearClientDatabase();
    this.clearDbSub = this.testservice.clearClientDbResultObservable.subscribe(
      success => {
        if (success) {
          this.messageBox = {
            type: MessageType.Success,
            message: 'Client database has been successfully cleaned'
          };
        } else {
          this.messageBox = {
            type: MessageType.Error,
            message: 'Database cleanup failed'
          };
        }
        this.runTestLoader = false;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.runTestSub) {
      this.runTestSub.unsubscribe();
    }

    if (this.clearDbSub) {
      this.clearDbSub.unsubscribe();
    }
  }
}
