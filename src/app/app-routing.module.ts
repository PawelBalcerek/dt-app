import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'main', loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule) }, { path: 'home', loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
