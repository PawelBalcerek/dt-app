import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { SellOfferPageComponent } from './sell-offer-page/sell-offer-page.component';
import { BuyOfferPageComponent } from './buy-offer-page/buy-offer-page.component';
import { BuyOfferAddComponent } from './buy-offer-page/buy-offer-add/buy-offer-add.component';
import { SellOfferAddComponent } from './sell-offer-page/sell-offer-add/sell-offer-add.component';
import { ResourcePageComponent } from './resource-page/resource-page.component';
import { TransactionPageComponent } from './transaction-page/transaction-page.component';
import { AuthGuardService } from 'src/app/core/guards/auth-guard.service';

const routes: Routes = [
  { path: 'home', component: HomePageComponent, canActivate: [AuthGuardService] }, 
  { path: 'user', component: UserPageComponent, canActivate: [AuthGuardService] },
  { path: 'sell-offer', component: SellOfferPageComponent, children:[
    { path: 'add', component: SellOfferAddComponent }
  ], canActivate: [AuthGuardService] },
  { path: 'buy-offer', component: BuyOfferPageComponent, children:[
    { path: 'add', component: BuyOfferAddComponent }
  ], canActivate: [AuthGuardService] },
  { path: 'transaction', component: TransactionPageComponent, canActivate: [AuthGuardService] },
  {path: 'resource', component: ResourcePageComponent, canActivate: [AuthGuardService]}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
