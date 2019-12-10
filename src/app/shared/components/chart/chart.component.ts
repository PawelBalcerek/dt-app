import { Component, OnInit, ElementRef,  Input, ViewChild } from '@angular/core';
import * as d3 from "d3-scale-chromatic";
import { Chart } from 'chart.js';
import { Observable } from 'rxjs';
import {Charts} from 'src/app/shared/models/Tests/chart'


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  chart: any = {};
  @ViewChild('canvasDownload', {static: false}) canvasDownload: ElementRef;
  @ViewChild('myCanvas', {static: false}) myCanvas: ElementRef;
  public context: CanvasRenderingContext2D;
  downloadContext: CanvasRenderingContext2D;

  viewInit: boolean = false;
  alive: boolean = true;
  chartType: string = 'bar';
  colorType: string = "interpolateRainbow";

  _dataChart: Charts.DataChart;

  @Input("dataChart") set dataChartInput(value: Charts.DataChart) {
    if (value) {
      this._dataChart = value;
      if( this._dataChart.calculatePercentage ){
        this._dataChart.dataSetChart.forEach(x => {
          x.data = this.calculatePercentage(x.data);
        });
      }
      
    } else {
      this._dataChart = null;
    }

    if (this.viewInit) {
      this.draw(this._dataChart, this.chartType, this.colorType);
    }
  }

  constructor() {

  }

  ngOnInit() {
  }

  calculatePercentage(data: number[]): number[] {
    let sum: number = 0;
    data.forEach(x => sum = sum+x);
    let percentageArray: number[] = [];
    data.forEach(x => {
      let percentage = x / sum * 100;
      percentageArray.push(percentage);
    })
    return percentageArray
  }

  draw(dataChart: Charts.DataChart, chartType: string, colorType: string): void {
    if (dataChart != null && dataChart.dataSetChart != null && dataChart.dataSetChart.length > 0) {
      dataChart.dataSetChart = this.generateColors2(this.chartType, dataChart.dataSetChart, colorType);
      this.context = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');
      this.context.fillStyle = 'green';
      this.context.fillRect(0, 0, this.myCanvas.nativeElement.width, this.myCanvas.nativeElement.height);
      this.myCanvas.nativeElement.style.backgroundColor = '#fff';
      if (this.chart != null && this.chart.data != null) {
        this.chart.data.datasets = [];
        this.chart.update();
      }
      this.chart = new Chart(this.context, {
        type: chartType,
        data: {
          labels: dataChart.labels,
          datasets: dataChart.dataSetChart
        },
        options: {
          legend: {
            display: true,
            responsive: true, 
          },
          tooltips: {
            callbacks: {
              label: function (item, data) {
                return data.datasets[item.datasetIndex].label + ": " + data.labels[item.index] + ": " + data.datasets[item.datasetIndex].data[item.index];
              }
            }
          }, 
          scales:{
            yAxes:[{
              ticks:{
                beginAtZero: true
              }, 
              scaleLabel:{
                display: true,
                labelString: 't[ms]'
              }
            }]
          }
        }
      });
    }
  }

  resize(): void{
    if( this.chart ){
      this.chart.resize();
    }
  }

  generateColors2(charType: string, dataSets: Charts.DataSetChart[], colorType: string): Charts.DataSetChart[] {
    if (charType == 'pie' || charType == 'doughnut' || dataSets.length == 1) {
      let colors = this.generateColors(dataSets[0].data.length, colorType);
      for (let i = 0; i < dataSets.length; i++) {
        dataSets[i].backgroundColor = colors;
      }
    } else {
      let colors = this.generateColors(dataSets.length, colorType);
      for (let i = 0; i < dataSets.length; i++) {
        dataSets[i].backgroundColor = colors[i];
      }
    }
    return dataSets;
  }

  generateColors(number: number, colorType: string) {
    let colors = [];
    if (number > 0) {
      let divideRate = 1;
      let bias = 0;
      if (number < 10) {
        divideRate = 2;
        bias = 0.3;
      }
      for (let i = 0; i < number; i++) {
        let color;
        let t = (i + bias) / number / divideRate;
        switch (colorType) {
          case "interpolateRainbow":
            color = d3.interpolateRainbow(t);
            break;
          case "interpolatePlasma":
            color = d3.interpolatePlasma(t);
            break;
          case "interpolateGreys":
            color = d3.interpolateGreys((1 - t));
            break;
          case "interpolateViridis":
            color = d3.interpolateViridis(t);
            break;
          case "interpolateCubehelixDefault":
            color = d3.interpolateCubehelixDefault(t);
            break;
          case "interpolateSpectral":
            color = d3.interpolateSpectral(t);
            break;
          case "interpolatePuBu":
            color = d3.interpolatePuBu(1 - t);
            break;
        }

        colors.push(color)
      }
    }

    return colors;
  }

  changeChartType(chartType: string) {
    this.draw(this._dataChart, chartType, this.colorType);
  }

  changeColorType(colorType) {
    this.draw(this._dataChart, this.chartType, colorType);
  }

  ngAfterViewInit() {
    this.viewInit = true;
    this.draw(this._dataChart, this.chartType, this.colorType);
  }

  ngOnDestroy(){
    this.alive=  false;
  }


  downloadImage() {
    this.canvasDownload.nativeElement.width = this.myCanvas.nativeElement.width;
    this.canvasDownload.nativeElement.height = this.myCanvas.nativeElement.height;
    this.downloadContext = this.canvasDownload.nativeElement.getContext('2d');
    this.downloadContext.fillStyle = "#FFFFFF";
    this.downloadContext.fillRect(0,0,this.myCanvas.nativeElement.width,this.myCanvas.nativeElement.height);
    this.downloadContext.drawImage(this.myCanvas.nativeElement, 0, 0);
    let data = this.canvasDownload.nativeElement.toDataURL();

    const a = document.createElement('a');
    a.href = data;
    a.download = "dt_app_chart.png";
    document.body.appendChild(a);
    a.click();
  }

}
