import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './core/login-page/login-page.component';


const routes: Routes = [
  { path: 'main', loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule) }, 
  { path: 'home', loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule) }, 
  {path:'login', component: LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
