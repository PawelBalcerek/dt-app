import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionTypePipe } from './transaction-type.pipe';



@NgModule({
  declarations: [TransactionTypePipe],
  exports:[
    TransactionTypePipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
