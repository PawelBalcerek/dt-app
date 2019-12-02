import { TestsHomePageComponent } from './tests-home-page/tests-home-page.component';
import { NgModule } from '@angular/core';
import { AngularMaterializeModule } from 'src/app/shared/angular-materialize/angular-materialize.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TestsRoutingModule } from './tests-routing.module';

@NgModule({
  declarations: [TestsHomePageComponent],
  imports: [
    CommonModule,
    AngularMaterializeModule,
    TestsRoutingModule,
    FormsModule,
  ]
})
export class TestsModule {}
