import { Component, OnInit } from '@angular/core';
import { SellOffersService } from 'src/app/core/services/sell-offers.service';
import { CompanyService } from 'src/app/core/services/company.service';
import { MatDialog } from '@angular/material/dialog';
import { SellOfferAddComponent } from './sell-offer-add/sell-offer-add.component';

@Component({
  selector: 'app-sell-offer-page',
  templateUrl: './sell-offer-page.component.html',
  styleUrls: ['./sell-offer-page.component.css']
})
export class SellOfferPageComponent implements OnInit {

  constructor( private sellOffersService: SellOffersService,
              private companysService: CompanyService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.sellOffersService.getSellOffers();
    this.companysService.getCompanies();
  }

  openAddSellOfferDialog(){
    const dialogRef = this.dialog.open(SellOfferAddComponent, {
      width: '400px',
      data: this.companysService.company_0
    });

    dialogRef.afterClosed().subscribe(result => {
      if( result!=null ){
        this.sellOffersService.addSellOffer( result );
      }
      
    });
  }
}
