import { Company } from './Company.model';

export interface BuyOffer {
    id: number;
    amount: number;
    company: Company;
    resourceId: number;
    price: number;
    date: Date;
    isValid: boolean;
    companyId:number;
}