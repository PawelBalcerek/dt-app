import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Transaction } from 'src/app/shared/models/Transaction.model';
import { TransactionType } from 'src/app/shared/models/enums/TransactionType.enum';
import { Company } from 'src/app/shared/models/Company.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private _transactions: BehaviorSubject<Transaction[]> = new BehaviorSubject([]);
  public transactions_0: Observable<Transaction[]> = this._transactions.asObservable();
  
  constructor(public http: HttpClient) { }

  getTransactions(){
    let api = environment.apiUrl + "users/transactions"; 
    this.http.get<Company[]>( api )
    .subscribe((data:any)=>{
      let transactions: Transaction[] = data.transactions;
      this._transactions.next( transactions );
    });
  }
}
