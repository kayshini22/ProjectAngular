export class Pdfticket 
{
    flight_name:string;
    source_destination:string;
    target_destination:string;
    schedule_id:number;
    booking_id:number;
    arrival_time:string;
    departure_time:string;
    seat_no:number;
    ticket_id:number;
    status:string;
    name:string;
    passenger_id:number;
    gate:number;
    constructor(flight_name:string="",source_destination:string="",
    target_destination:string="",schedule_id:number=0,booking_id:number=0,ticket_id:number=0,status:string="",arrival_time:string="",departure_time:string="",
    seat_no:number=0,name:string="",passenger_id:number=0,gate:number=0)
    {
        this.flight_name=flight_name;
        this.source_destination=source_destination;
        this.target_destination=target_destination;
        this.arrival_time=arrival_time;
        this.departure_time=departure_time;
        this.schedule_id=schedule_id;
        this.booking_id=booking_id;
        this.seat_no=seat_no;
        this.ticket_id=ticket_id;
        this.status=status;
        this.name=name;
        this.gate=gate;
        this.passenger_id=passenger_id;
    }
}

// "flight_name": "B106",
// "source_destination": "Bangalore",
// "target_destination": "Goa",
// "arrival_time": "18:00:00",
// "departure_time": "16:00:00",
// "schedule_id": 10025,
// "booking_id": 5215,
// "seat_no": "C 58",
// "ticket_id": 2081,
// "status": "upcoming",
// "passenger_id": 1035,
// "name": "Adhithya"
// <h4>Flight Name:&nbsp;&nbsp;{{ticket.flight_name}}</h4>
//         <br>
//         <h4>Source_destination:&nbsp;&nbsp;{{ticket.source_destination}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;target_destination:&nbsp;&nbsp;{{ticket.target_destination}}</h4>
//         <br>
//         <h4>arrival_time:&nbsp;&nbsp;{{ticket.arrival_time}}&nbsp;&nbsp;&nbsp;departure_time:&nbsp;&nbsp;{{ticket.departure_time}}</h4>
//         <br> 
//         <h4>passenger Name:&nbsp;&nbsp;{{ticket.name}}&nbsp;&nbsp;&nbsp;<h4>seat No.:&nbsp;&nbsp;{{ticket.seat_no}}</h4>
//         <br>
//         <h4>gate:&nbsp;&nbsp;{{ticket.gate}}</h4>