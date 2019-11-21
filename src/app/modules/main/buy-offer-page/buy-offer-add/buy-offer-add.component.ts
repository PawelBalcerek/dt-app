import { Component, OnInit, Inject } from '@angular/core';
import { BuyOffer } from 'src/app/shared/models/BuyOffer.model';
import { BuyOfferService } from 'src/app/core/services/buy-offer.service';
import { CompanyService } from 'src/app/core/services/company.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Company } from 'src/app/shared/models/Company.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-buy-offer-add',
  templateUrl: './buy-offer-add.component.html',
  styleUrls: ['./buy-offer-add.component.css']
})
export class BuyOfferAddComponent implements OnInit {
  public buyOffer: BuyOffer;

  constructor(public dialogRef: MatDialogRef<BuyOfferAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Observable<Company[]>) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.buyOffer = this.getInitBuyOffer();
  }

  getInitBuyOffer() {
    return { amount: 0, date: new Date(), id: null, price: 0, resourceId: null, isValid: true, companyId: null, company:null };
  }

}
