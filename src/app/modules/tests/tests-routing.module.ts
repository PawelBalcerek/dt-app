import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestsHomePageComponent } from './tests-home-page/tests-home-page.component';

const routes: Routes = [
  { path: '', component: TestsHomePageComponent, data: { needsValidation: false} },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestsRoutingModule { }
