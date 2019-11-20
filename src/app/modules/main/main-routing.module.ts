import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { SellOfferPageComponent } from './sell-offer-page/sell-offer-page.component';
import { BuyOfferPageComponent } from './buy-offer-page/buy-offer-page.component';
import { BuyOfferAddComponent } from './buy-offer-page/buy-offer-add/buy-offer-add.component';
import { ResourcePageComponent } from './resource-page/resource-page.component';
import { TransactionPageComponent } from './transaction-page/transaction-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent }, 
  { path: 'user', component: UserPageComponent },
  { path: 'sell-offer', component: SellOfferPageComponent },
  { path: 'buy-offer', component: BuyOfferPageComponent },
  { path: 'transaction', component: TransactionPageComponent },
  {path: 'resource', component: ResourcePageComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
