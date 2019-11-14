import { Component, OnInit, Inject } from '@angular/core';
import { SellOffer } from 'src/app/shared/models/SellOffer.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Company } from 'src/app/shared/models/Company.model';
import { CompanyService } from 'src/app/core/services/company.service';
import { SellOffersService } from 'src/app/core/services/sell-offers.service';

@Component({
  selector: 'app-sell-offer-add',
  templateUrl: './sell-offer-add.component.html',
  styleUrls: ['./sell-offer-add.component.css']
})
export class SellOfferAddComponent implements OnInit {
  private sellOffer: SellOffer;

  constructor(public dialogRef: MatDialogRef<SellOfferAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Observable<Company[]>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
    ngOnInit() {
      this.sellOffer = this.getInitSellOffer();
  }

  getInitSellOffer() {
    return { amount: 0, date: new Date(), id: null, price: 0, resourceId: null, isValid: true, companyId: null };
  }

}
