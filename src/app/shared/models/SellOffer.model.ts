export interface SellOffer {
    id: number;
    amount: number;
    resourceId: number;
    price: number;
    date: Date;
    isValid: boolean;
}