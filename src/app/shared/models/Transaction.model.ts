import { Company } from './Company.model'
import { TransactionType } from './enums/TransactionType.enum';

export interface Transaction{
    id: number;
    company: Company;
    price: number;
    amount: number;
    date: Date
    type: TransactionType
}