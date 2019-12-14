import { Component, OnInit, Input } from '@angular/core';
import { Tests } from 'src/app/shared/models/Tests/tests';
import { Testservice } from 'src/app/core/services/tests.service';
import { MatDialog } from '@angular/material';
import { TestConfigurationAddComponent } from './test-configuration-add/test-configuration-add.component';

@Component({
  selector: 'app-tests-configuration',
  templateUrl: './tests-configuration.component.html',
  styleUrls: ['./tests-configuration.component.css']
})
export class TestsConfigurationComponent implements OnInit {

  testsParameters: Tests.TestParameters[] = [];

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

  @Input()
  set TestsParameters(value: Tests.TestParameters[]) {
    this.testsParameters = value;
  }


  constructor(private testservice: Testservice, public dialog: MatDialog) { }

  ngOnInit() { }

  openAddNewTestDialog() {
    const dialogRef = this.dialog.open(TestConfigurationAddComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.testservice.addTestParameters( result );
      }
    });
  }

}
