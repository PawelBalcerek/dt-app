import { Component, OnInit, Inject } from '@angular/core';
import { SellOffer } from 'src/app/shared/models/SellOffer.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Company } from 'src/app/shared/models/Company.model';
import { CompanyService } from 'src/app/core/services/company.service';
import { SellOffersService } from 'src/app/core/services/sell-offers.service';
import { Resource } from 'src/app/shared/models/Resource.model';

@Component({
  selector: 'app-sell-offer-add',
  templateUrl: './sell-offer-add.component.html',
  styleUrls: ['./sell-offer-add.component.css']
})
export class SellOfferAddComponent implements OnInit {
  public sellOffer: SellOffer;
  resource: Resource;
  maxAmount: number = 0;

  constructor(public dialogRef: MatDialogRef<SellOfferAddComponent>,
    //@Inject(MAT_DIALOG_DATA) public data: Observable<Company[]>) { }
    @Inject(MAT_DIALOG_DATA) public data: Observable<Resource[]>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
    ngOnInit() {
      this.sellOffer = this.getInitSellOffer();
  }

  getInitSellOffer() {
    return { amount: 0, date: new Date(), id: null, price: 0, resourceId: null, isValid: true, companyId: null };
  }

  setResource(){
    this.maxAmount = this.resource.amount;
    this.sellOffer.resourceId = this.resource.id;
  }

  checkMaxAmount(){
    if( this.sellOffer.amount> this.maxAmount ){
      this.sellOffer.amount = this.maxAmount;
    }
  }

}
