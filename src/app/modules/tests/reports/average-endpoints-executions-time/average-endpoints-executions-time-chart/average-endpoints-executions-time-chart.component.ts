import { Component, OnInit, Input } from '@angular/core';
import {Reports} from 'src/app/shared/models/Tests/reports';
import {Charts} from 'src/app/shared/models/Tests/chart';

@Component({
  selector: 'app-average-endpoints-executions-time-chart',
  templateUrl: './average-endpoints-executions-time-chart.component.html',
  styleUrls: ['./average-endpoints-executions-time-chart.component.css']
})
export class AverageEndpointsExecutionsTimeChartComponent implements OnInit {
  dataChart: Charts.DataChart = {dataSetChart:[], labels:[], calculatePercentage: false};
  _averageEndpointsExecutionTime: Reports.AverageEndpointsExecutionTime[] = [];
  
  
  @Input("averageEndpointsExecutionTime") set averageEndpointsExecutionTimeInput(value: Reports.AverageEndpointsExecutionTime[]){
    this.drawChart( value );
  }


  constructor() { }

  ngOnInit() {
  }

  drawChart(value: Reports.AverageEndpointsExecutionTime[]){
    if(value){
      let timesDB: number[] = []; 
      let timesAPI: number[] = []; 
      let timesTest: number[] = []; 
      let labels: string[] = [];
      value.forEach(x=>{
        timesDB.push(x.averageExecutionTimes.databaseTestTime);
        timesAPI.push( x.averageExecutionTimes.applicationTestTime );
        timesTest.push( x.averageExecutionTimes.apiTestTime );
        labels.push( x.endpoint.endpointName + ' ['+x.endpoint.httpMethod+']' );
      });

      let dataSetDB: Charts.DataSetChart = {data: timesDB, label: 'timesDB', backgroundColor: []};
      let dataSetAPI: Charts.DataSetChart = {data: timesAPI, label: 'timesAPI', backgroundColor: []};
      let dataSetTest: Charts.DataSetChart = {data: timesTest, label: 'timesTest', backgroundColor: []};

      this.dataChart.labels = labels;
      this.dataChart.dataSetChart = [];
      this.dataChart.dataSetChart.push(dataSetDB);
      this.dataChart.dataSetChart.push(dataSetAPI);
      this.dataChart.dataSetChart.push(dataSetTest);
      this.dataChart = Object.assign({}, this.dataChart);
    }
  }
}
