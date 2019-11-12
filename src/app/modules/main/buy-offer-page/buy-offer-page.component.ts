import { Component, OnInit } from '@angular/core';
import { BuyOfferService } from 'src/app/core/services/buy-offer.service';
import { CompanyService } from 'src/app/core/services/company.service';
import { MatDialog } from '@angular/material/dialog';
import { BuyOfferAddComponent } from './buy-offer-add/buy-offer-add.component';

@Component({
  selector: 'app-buy-offer-page',
  templateUrl: './buy-offer-page.component.html',
  styleUrls: ['./buy-offer-page.component.css']
})
export class BuyOfferPageComponent implements OnInit {

  constructor( private buyOffersService: BuyOfferService, 
              private companysService: CompanyService, 
              public dialog: MatDialog) { }

  ngOnInit() {
    
    this.buyOffersService.getBuyOffers();
    this.companysService.getCompanies();
  }

  openAddDialog(){
    const dialogRef = this.dialog.open(BuyOfferAddComponent, {
      width: '400px',
      data: this.companysService.company_0
    });

    dialogRef.afterClosed().subscribe(result => {
      if( result!=null ){
        this.buyOffersService.addBuyOffer( result );
      }
      
    });
  }
}
