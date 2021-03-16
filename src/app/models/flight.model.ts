export class Flight
{
    flight_id:number;
    source_destination:string;
    target_destination:string;
    flight_name:string;
    economy_class_fare:number;
    business_class_fare:number;
    first_class_fare:number;
    premium_class_fare:number;
    capacity_economy_class:number;
    capacity_business_class:number;
    capacity_first_class:number;
    capacity_premium_class:number;
    status:string;
 
    
    constructor(flight_id:number=0,source_destination:string="",target_destination:string="",flight_name:string="",
    economy_class_fare:number=0,business_class_fare:number=0,first_class_fare:number=0,premium_class_fare:number=0,
    capacity_economy_class:number=0,capacity_business_class:number=0,capacity_first_class:number=0,capacity_premium_class:number=0,
    status:string="")
    {
        this.flight_id=flight_id;
        this.source_destination=source_destination;
        this.target_destination=target_destination;
        this.flight_name=flight_name;
        this.economy_class_fare=economy_class_fare
        this.business_class_fare=business_class_fare;
        this.first_class_fare=first_class_fare;
        this.premium_class_fare=premium_class_fare;
        this.capacity_economy_class=capacity_economy_class;
        this.capacity_business_class=capacity_business_class;
        this.capacity_first_class=capacity_first_class;
        this.capacity_premium_class=capacity_premium_class;
        this.status=status;
    }
 
}