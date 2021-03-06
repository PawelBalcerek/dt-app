import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { MainRoutingModule } from './main-routing.module';
import { UserPageComponent } from './user-page/user-page.component';
import { UserComponent } from './user-page/components/user/user.component';
import { AngularMaterializeModule } from 'src/app/shared/angular-materialize/angular-materialize.module';
import { SellOfferPageComponent } from './sell-offer-page/sell-offer-page.component';
import { SellOfferTableComponent } from './sell-offer-page/sell-offer-table/sell-offer-table.component';
import { BuyOfferPageComponent } from './buy-offer-page/buy-offer-page.component';
import { BuyOfferTableComponent } from './buy-offer-page/buy-offer-table/buy-offer-table.component';
import { BuyOfferAddComponent } from './buy-offer-page/buy-offer-add/buy-offer-add.component'
import { FormsModule } from '@angular/forms';
import { SellOfferAddComponent } from './sell-offer-page/sell-offer-add/sell-offer-add.component';
import { ResourcePageComponent } from './resource-page/resource-page.component';
import { ResourceTableComponent } from './resource-page/resource-table/resource-table.component';
import { AddCompanyDialogComponent } from './resource-page/add-company-dialog/add-company-dialog.component';
import { TransactionPageComponent } from './transaction-page/transaction-page.component';
import { TransactionTableComponent } from './transaction-page/transaction-table/transaction-table.component';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

@NgModule({
  declarations: [HomePageComponent, UserPageComponent, UserComponent, SellOfferPageComponent, SellOfferTableComponent, BuyOfferPageComponent, BuyOfferTableComponent, BuyOfferAddComponent, ResourcePageComponent, ResourceTableComponent, SellOfferAddComponent, AddCompanyDialogComponent, TransactionPageComponent, TransactionTableComponent],
  entryComponents: [AddCompanyDialogComponent, BuyOfferAddComponent],
  imports: [
    CommonModule,
    AngularMaterializeModule,
    MainRoutingModule, 
    FormsModule, 
    PipesModule
  ]
})
export class MainModule { }
