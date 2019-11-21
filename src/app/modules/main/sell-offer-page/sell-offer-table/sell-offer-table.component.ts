import { Component, OnInit, Input } from '@angular/core';
import { SellOffer } from 'src/app/shared/models/SellOffer.model';
import { SellOffersService} from 'src/app/core/services/sell-offers.service';
@Component({
  selector: 'app-sell-offer-table',
  templateUrl: './sell-offer-table.component.html',
  styleUrls: ['./sell-offer-table.component.css']
})
export class SellOfferTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'companyName', 'amount', 'price', 'date', 'isValid', 'withdraw'   ];
  _sellOffers: SellOffer[] = [];
  @Input("sellOffers") set SellOffer(value: SellOffer[]){
    this._sellOffers = value;
  }
  constructor(public sellOfferService: SellOffersService) { }

  ngOnInit() {
  }

  withdrawSell(element: SellOffer){
    this.sellOfferService.withdrawSellOffer(element);
  }

}
