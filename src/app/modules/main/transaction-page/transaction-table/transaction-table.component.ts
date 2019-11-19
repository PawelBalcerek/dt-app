import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from 'src/app/shared/models/Transaction.model';
import { TransactionType } from 'src/app/shared/models/enums/TransactionType.enum';

@Component({
  selector: 'app-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.css']
})
export class TransactionTableComponent implements OnInit {
  tT:any = TransactionType;
  transactionType: TransactionType = null;
  
  public displayedColumns: string[] = ['id', 'companyName', 'amount', 'price', 'type', 'date'];
   _transactions: Transaction[]=[];
   _transactionsFilter: Transaction[]=[];
  @Input("transactions") set transactions(value: Transaction[]){
    if( value ){
      this._transactions = value
    }else{
      this._transactions = [];
    }

    
    this._transactionsFilter = this.filter(this.transactionType, this._transactions);
  }
  constructor() { }

  ngOnInit() {
  }

  onTypeTransactionChange(transactionType: TransactionType){
    this._transactionsFilter = this.filter( transactionType, this._transactions );
  }

  filter(transactionType: TransactionType, transactions: Transaction[]): Transaction[]{
    let transactionsFiltered = [];
    if( transactionType!=null){
      transactionsFiltered = transactions.filter( x=> x.type==transactionType )
    }else{
      transactionsFiltered= transactions;
    }

    return transactionsFiltered;
  }

}
