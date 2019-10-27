import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { MainRoutingModule } from './main-routing.module';
import { UserPageComponent } from './user-page/user-page.component';
import { UserComponent } from './user-page/components/user/user.component';
import { AngularMaterializeModule } from 'src/app/shared/angular-materialize/angular-materialize.module';


@NgModule({
  declarations: [HomePageComponent, UserPageComponent, UserComponent],
  imports: [
    CommonModule,
    AngularMaterializeModule,
    MainRoutingModule
  ]
})
export class MainModule { }
