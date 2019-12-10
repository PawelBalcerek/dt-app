import { TestsHomePageComponent } from './tests-home-page/tests-home-page.component';
import { NgModule } from '@angular/core';
import { AngularMaterializeModule } from 'src/app/shared/angular-materialize/angular-materialize.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TestsRoutingModule } from './tests-routing.module';
import { TestsRunningComponent } from './tests-home-page/tests-running/tests-running.component';
import { TestsReportsHomePageComponent } from './reports/tests-reports-home-page/tests-reports-home-page.component';
import { TestsConfigurationComponent } from './tests-home-page/tests-configuration/tests-configuration.component';
import { TestConfigurationAddComponent } from './tests-home-page/tests-configuration/test-configuration-add/test-configuration-add.component';
import { AverageEndpointsExecutionsTimeComponent } from './reports/average-endpoints-executions-time/average-endpoints-executions-time.component';
import { AverageEndpointsExecutionsTimeChartComponent } from './reports/average-endpoints-executions-time/average-endpoints-executions-time-chart/average-endpoints-executions-time-chart.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
  declarations: [TestsHomePageComponent, TestsRunningComponent, TestsReportsHomePageComponent, TestsConfigurationComponent, TestConfigurationAddComponent, AverageEndpointsExecutionsTimeComponent, AverageEndpointsExecutionsTimeChartComponent],
  entryComponents: [
    TestConfigurationAddComponent
  ],
  imports: [
    CommonModule,
    AngularMaterializeModule,
    TestsRoutingModule,
    FormsModule,
    ComponentsModule,
  ]
})
export class TestsModule {}
