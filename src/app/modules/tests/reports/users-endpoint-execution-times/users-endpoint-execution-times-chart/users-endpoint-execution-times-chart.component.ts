import { Component, OnInit, Input } from '@angular/core';
import { Reports } from 'src/app/shared/models/Tests/reports';
import { Charts } from 'src/app/shared/models/Tests/chart';

@Component({
  selector: 'app-users-endpoint-execution-times-chart',
  templateUrl: './users-endpoint-execution-times-chart.component.html',
  styleUrls: ['./users-endpoint-execution-times-chart.component.css']
})
export class UsersEndpointExecutionTimesChartComponent implements OnInit {
  dataChart: Charts.DataChart = {dataSetChart:[], labels:[], calculatePercentage: false};
  usersEndpointExecutionTimes: Reports.UserEndpointExecutionTimes[];
  
  @Input("userEndpointTimes") set userEndpointTimesInput( value: Reports.UserEndpointExecutionTimes ){
    this.drawChart( value );
  }

  constructor() { }

  ngOnInit() {
  }

  drawChart(value: Reports.UserEndpointExecutionTimes){
    if(value){
      let databaseTestTimes: number[] = []; 
      let applicationTestTime: number[] = [];  
      let apiTestTimes: number[] = [];  
      let labels: string[] = [];
      value.executionTimesWithStamps.forEach(x=>{
        databaseTestTimes.push(x.databaseTestTime);
        
        applicationTestTime.push( x.applicationTestTime );

        apiTestTimes.push( x.apiTestTime );
        labels.push( 't:' + x.timeStamp );
      });

      let dataSetDB: Charts.DataSetChart = {data: databaseTestTimes, label: 'databaseTestTime', backgroundColor: []};
      let dataSetAPI: Charts.DataSetChart = {data: applicationTestTime, label: 'applicationTestTime', backgroundColor: []};
      let dataSetTest: Charts.DataSetChart = {data: apiTestTimes, label: 'apiTestTime', backgroundColor: []};

      this.dataChart = {dataSetChart:[], labels:[], calculatePercentage: false};
      this.dataChart.labels = labels;
      this.dataChart.dataSetChart = [];
      this.dataChart.dataSetChart.push(dataSetDB);
      this.dataChart.dataSetChart.push(dataSetAPI);
      this.dataChart.dataSetChart.push(dataSetTest);
      this.dataChart = Object.assign({}, this.dataChart);
    }else{
      this.dataChart = null;
    }
  }

}
