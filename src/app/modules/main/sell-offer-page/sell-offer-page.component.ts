import { Component, OnInit } from '@angular/core';
import { SellOffersService } from 'src/app/core/services/sell-offers.service';
import { CompanyService } from 'src/app/core/services/company.service';
import { MatDialog } from '@angular/material/dialog';
import { SellOfferAddComponent } from './sell-offer-add/sell-offer-add.component';
import { ResourceService } from 'src/app/core/services/resource.service';

@Component({
  selector: 'app-sell-offer-page',
  templateUrl: './sell-offer-page.component.html',
  styleUrls: ['./sell-offer-page.component.css']
})
export class SellOfferPageComponent implements OnInit {

  constructor( public sellOffersService: SellOffersService,
              public companysService: CompanyService,
              public resourceService: ResourceService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.sellOffersService.getSellOffers();
    //this.companysService.getCompanies();
    this.resourceService.getResources();
  }

  openAddSellOfferDialog(){
    const dialogRef = this.dialog.open(SellOfferAddComponent, {
      width: '400px',
      data: this.resourceService.resources_0
    });

    dialogRef.afterClosed().subscribe(result => {
      if( result!=null ){
        this.sellOffersService.addSellOffer( result );
      }
      
    });
  }
}
