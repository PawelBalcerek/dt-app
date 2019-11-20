import { Pipe, PipeTransform } from '@angular/core';
import { TransactionType } from '../models/enums/TransactionType.enum';

@Pipe({
  name: 'transactionType'
})
export class TransactionTypePipe implements PipeTransform {

  transform(val: TransactionType): string {
    switch (val) {
      case TransactionType.BUY_OFFER:
        return "Buy";
      case TransactionType.SELL_OFFER:
        return "Sell";
      default:
        return "...";
    }
  }
}
