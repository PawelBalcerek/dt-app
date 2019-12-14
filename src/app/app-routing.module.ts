import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './core/login-page/login-page.component';
import { RegisterPageComponent } from './core/register-page/register-page.component';


const routes: Routes = [
  { path: 'main', loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule) },
  { path: 'home', loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule) },
  {
    path: 'tests',
    loadChildren: () => import('./modules/tests/tests.module').then(m => m.TestsModule)
  },
  { path:'login', component: LoginPageComponent },
  { path:'register', component: RegisterPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
