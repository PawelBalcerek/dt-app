export interface BuyOffer {
    id: number;
    amount: number;
    resourceId: number;
    maxPrice: number;
    date: Date;
    isValid: boolean;
    companyId:number;
}