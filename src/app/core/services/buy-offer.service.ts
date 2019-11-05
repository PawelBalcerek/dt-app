import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BuyOffer } from 'src/app/shared/models/BuyOffer.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BuyOfferService {
  private _buyOffers: BehaviorSubject<BuyOffer[]> = new BehaviorSubject([]);
  public readonly buyOffers_0: Observable<BuyOffer[]> = this._buyOffers.asObservable();

  constructor(private http: HttpClient) { }

  public getBuyOffers(){
    let api = environment.apiUrl + "BuyOffers"
    this.http.get<BuyOffer[]>(api)
      .subscribe((buyOffers:BuyOffer[])=>{
        this._buyOffers.next( buyOffers )
      })
  //   let buyOffers = [{    id: 1,
  //     amount: 1,
  //     resourceId: 2,
  //     maxPrice: 11,
  //     date: new Date(),
  //     isValid: true}]

  //   this._buyOffers.next( buyOffers );
  }

  public addBuyOffer(buyOffer:BuyOffer){
    this._buyOffers.next( [... this._buyOffers.value.concat( buyOffer ) ]);
  }

  public withdrawBuyOffer(buyOffer: BuyOffer){
    this._buyOffers.value.forEach(x=> {
      if(x.id == buyOffer.id){
        x.isValid = false;
      }
    })
  }
}
