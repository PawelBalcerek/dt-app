import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart/chart.component';
import { AngularMaterializeModule } from '../angular-materialize/angular-materialize.module';



@NgModule({
  declarations: [ChartComponent],
  imports: [
    CommonModule, 
    AngularMaterializeModule
  ], 
  exports: [
    ChartComponent
  ]
})
export class ComponentsModule { }
