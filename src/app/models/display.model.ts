

export class Display
{
    flight_id:number;
    flight_name:string
    schedule_id:number;
    departure_time:string;
    arrival_time:string;
    duration:string;
    economy_class_fare:number;
    business_class_fare:number;
    first_class_fare:number;
    premium_class_fare:number;
    avail_business_class:number;
    avail_economy_class:number;
    avail_first_class:number;
    avail_premium_class:number;

    constructor(
        flight_name:string="",flight_id:number=0,schedule_id:number=0,
        departure_time:string="",
        arrival_time:string="",
        duration:string="",
        economy_class_fare:number=0,
        business_class_fare:number=0,
        first_class_fare:number=0,
        premium_class_fare:number=0,
        avail_business_class:number=0,
        avail_economy_class:number=0,
        avail_first_class:number=0,
        avail_premium_class:number=0)
        {
            this.flight_id=flight_id;
            this.flight_name=flight_name
            this.schedule_id=schedule_id;
            this.departure_time=departure_time;
            this.arrival_time=arrival_time;
            this.duration=duration;
            this.economy_class_fare=economy_class_fare;
            this.business_class_fare=business_class_fare;
            this.premium_class_fare=premium_class_fare;
            this.first_class_fare=first_class_fare;
            this.avail_business_class=avail_business_class;
            this.avail_economy_class=avail_economy_class;
            this.avail_premium_class=avail_premium_class;
            this.avail_first_class=avail_first_class;

        };


}