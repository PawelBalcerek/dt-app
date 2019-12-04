import { TestsHomePageComponent } from './tests-home-page/tests-home-page.component';
import { NgModule } from '@angular/core';
import { AngularMaterializeModule } from 'src/app/shared/angular-materialize/angular-materialize.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TestsRoutingModule } from './tests-routing.module';
import { TestsRunningComponent } from './tests-home-page/tests-running/tests-running.component';
import { TestsReportsHomePageComponent } from './reports/tests-reports-home-page/tests-reports-home-page.component';
import { TestsConfigurationComponent } from './tests-home-page/tests-configuration/tests-configuration.component';

@NgModule({
  declarations: [TestsHomePageComponent, TestsRunningComponent, TestsReportsHomePageComponent, TestsConfigurationComponent],
  imports: [
    CommonModule,
    AngularMaterializeModule,
    TestsRoutingModule,
    FormsModule,
  ]
})
export class TestsModule {}
