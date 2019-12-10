import { Component, OnInit } from '@angular/core';
import { Testservice } from 'src/app/core/services/tests.service';
import { Tests } from 'src/app/shared/models/Tests/tests';
import { ReportsService } from 'src/app/core/services/reports.service';

@Component({
  selector: 'app-average-endpoints-executions-time',
  templateUrl: './average-endpoints-executions-time.component.html',
  styleUrls: ['./average-endpoints-executions-time.component.css']
})
export class AverageEndpointsExecutionsTimeComponent implements OnInit {
  selectedTestParameter : Tests.TestParameters;
  constructor(public testService: Testservice, public reportService:ReportsService) { }

  ngOnInit() {
    this.testService.getTestsParameters();
  }

  

  selectTestParameter(){
    if( this.selectedTestParameter ){
      this.reportService.getAverageEnpointsExecutionTimes( this.selectedTestParameter.testParametersId );
    }
  }

}
