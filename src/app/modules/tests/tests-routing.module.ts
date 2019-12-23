import { TestsReportsHomePageComponent } from './reports/tests-reports-home-page/tests-reports-home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestsHomePageComponent } from './tests-home-page/tests-home-page.component';
import { AverageEndpointsExecutionsTimeComponent } from './reports/average-endpoints-executions-time/average-endpoints-executions-time.component';
import { UsersEndpointExecutionTimesComponent } from './reports/users-endpoint-execution-times/users-endpoint-execution-times.component';

const routes: Routes = [
  { path: '', component: TestsHomePageComponent },
  { path: 'reports', component: TestsReportsHomePageComponent, children:[
    { path: 'average-enpoints-execution-time', component: AverageEndpointsExecutionsTimeComponent },
    { path: 'users-endpoint-execution-times', component: UsersEndpointExecutionTimesComponent }
  ] },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestsRoutingModule { }
