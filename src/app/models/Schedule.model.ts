export class Schedule 
{
    flight_id:number;
    travel_date:string;
    arrival_time:string;
    departure_time:string;
    duration:string;
    schedule_id:number;
    avail_business_class:number;
    avail_economy_class:number;
    avail_first_class:number;
    avail_premium_class:number;
    status:string;
    constructor(flight_id:number=0,travel_date:string="",arrival_time:string="",departure_time:string="",
        duration:string="",schedule_id:number=0,avail_business_class:number=0,
        avail_economy_class:number=0,avail_first_class:number=0,
        avail_premium_class:number=0,status:string="")
    {
        this.flight_id=flight_id;
        this.arrival_time=arrival_time;
        this.travel_date=travel_date;
        this.departure_time=departure_time;
        this.duration=duration;
        this.schedule_id=schedule_id;
        this.avail_business_class=avail_business_class;
        this.avail_economy_class=avail_economy_class;
        this.avail_first_class=avail_first_class;
        this.avail_premium_class=avail_premium_class;
        this.status=status;
    }
 
}