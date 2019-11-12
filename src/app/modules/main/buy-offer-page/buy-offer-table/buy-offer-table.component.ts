import { Component, OnInit, Input } from '@angular/core';
import { BuyOffer } from 'src/app/shared/models/BuyOffer.model';
import { BuyOfferService } from 'src/app/core/services/buy-offer.service';

@Component({
  selector: 'app-buy-offer-table',
  templateUrl: './buy-offer-table.component.html',
  styleUrls: ['./buy-offer-table.component.css']
})
export class BuyOfferTableComponent implements OnInit {
  private displayedColumns: string[] = ['id', 'amount', 'resourceId', 'maxPrice', 'date', 'isValid', 'withdraw'   ];
  private _buyOffers: BuyOffer[] = []; 
  @Input("buyOffers") set buyOffer(value: BuyOffer[]){
    this._buyOffers = value;
  }
  constructor(private buyOfferService: BuyOfferService) { }

  ngOnInit() {
  }

  withdraw(element: BuyOffer){
    this.buyOfferService.withdrawBuyOffer( element );
  }

}
