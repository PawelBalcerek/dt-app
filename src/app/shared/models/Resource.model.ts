import { Company } from './Company.model';

export interface Resource{
    amount:number;
    company: Company;
    id: number;
}