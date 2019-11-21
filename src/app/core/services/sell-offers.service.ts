import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SellOffer } from 'src/app/shared/models/SellOffer.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SellOffersService {
  private _sellOffers: BehaviorSubject<SellOffer[]> = new BehaviorSubject([]);
  public readonly sellOffers_0: Observable<SellOffer[]> = this._sellOffers.asObservable();

  constructor(private http: HttpClient) { }

  public getSellOffers() {
    let api = environment.apiUrl + "users/sell-offers";
    this.http.get<SellOffer[]>(api)
      .subscribe((data: any) => {
        let sellOffers: SellOffer[] = data.sellOffers;
        this._sellOffers.next(sellOffers)
      })
  }

  public addSellOffer(sellOffer: SellOffer) {
    let api = environment.apiUrl + "sell-offers"
    this.http.post<SellOffer[]>(api, sellOffer)
      .subscribe((data: any) => {
        // zrwacanie obiektu API ?
        this.getSellOffers();
      })

  }

  public withdrawSellOffer(sellOffer: SellOffer) {
    let api = environment.apiUrl + "sell-offers/" + sellOffer.id;
    this.http.put(api, null)
      .subscribe((data: any) => {
        this.getSellOffers();
      })


  }

}
