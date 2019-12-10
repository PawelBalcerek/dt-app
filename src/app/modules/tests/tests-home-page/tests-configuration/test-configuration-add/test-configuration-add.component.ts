import { Component, OnInit } from '@angular/core';
import { Tests } from 'src/app/shared/models/Tests/tests';

@Component({
  selector: 'app-test-configuration-add',
  templateUrl: './test-configuration-add.component.html',
  styleUrls: ['./test-configuration-add.component.css']
})
export class TestConfigurationAddComponent implements OnInit {

  public testsParameters: Tests.TestParameters = {testName: 'test 1', numberOfUsers: 10, numberOfRequests: 50, minSellPrice: 10, maxSellPrice: 100, minBuyPrice: 10, maxBuyPrice: 100};

  constructor() { }

  ngOnInit() { }

}
