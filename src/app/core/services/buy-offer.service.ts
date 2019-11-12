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
    let api = environment.apiUrl + "users/buy-offers"
    this.http.get<BuyOffer[]>(api)
      .subscribe((data:any)=>{
        let buyOffers:BuyOffer[] = data.buyOffers;
        this._buyOffers.next( buyOffers )
      })
  }

  public addBuyOffer(buyOffer:BuyOffer){
    let api = environment.apiUrl + "buy-offers"
    this.http.post<BuyOffer[]>(api, buyOffer)
      .subscribe((data:any)=>{
        //API nie zwraca utworzonego obiektu 
        //this._buyOffers.next( [... this._buyOffers.value.concat( buyOffer ) ]);
        this.getBuyOffers();
      })
    
  }

  public withdrawBuyOffer(buyOffer: BuyOffer){
    let api = environment.apiUrl + "buy-offers/" + buyOffer.id;
    this.http.put(api, null)
      .subscribe((data:any)=>{
        this.getBuyOffers();
      })


  }
}
