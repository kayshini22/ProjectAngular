export class Fare{
    economy_class_fare:number;
    business_class_fare:number;
    first_class_fare:number;
    premium_class_fare:number;
    constructor(economy_class_fare:number=0,business_class_fare:number=0,first_class_fare:number=0,premium_class_fare:number=0){
        this.economy_class_fare=economy_class_fare;
        this.business_class_fare=business_class_fare;
        this.first_class_fare=first_class_fare;
        this.premium_class_fare=premium_class_fare;
    }
}