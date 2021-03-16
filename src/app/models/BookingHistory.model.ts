import { NumberLiteralType } from "typescript";

export class bookedTicket{
    
    
    username:string;
    booking_id: number;
    cost: number;
        travel_date: string;
        gate: number;
        seat_no: string;
        ticket_id:number;
        firstname: string;
        age: number;
        gender: string;
        phone: string;
        departure_time: string;
        arrival_time: string;
        duration: string;
        flight_name: string;
        source_destination: string;
        target_destination: string;
    constructor(username:string="", booking_id:number=0,cost:number=0, travel_date:string="",gate:number=0,seat_no:string="",
                firstname:string="",age:number=0,gender:string="",phone:string="",departure_time:string="",ticket_id:number=0,arrival_time:string="",
                duration:string="",flight_name:string="",source_destination:string="",target_destination:string="")
    {
            this.username=username;
            this.booking_id=booking_id;
            this.cost=cost;
            this.travel_date=travel_date;
            this.gate=gate;
            this.seat_no=seat_no;
            this.ticket_id=ticket_id;
            this.firstname=firstname;
            this.age=age;
            this.gender=gender;
            this.phone=phone;
            this.departure_time=departure_time;
            this.arrival_time=arrival_time;
            this.duration=duration;
            this.flight_name=flight_name;
            this.source_destination=source_destination;
            this.target_destination=target_destination;
    }
}