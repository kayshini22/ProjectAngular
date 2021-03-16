import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Booking } from '../models/booking.model';
import { passenger } from '../models/passenger.model';
import { ReturnBooking } from '../models/returnbooking.model';
import { Ticket } from '../models/ticket.model';
import { BookingService } from '../services/booking.service';
import { PassengerService } from '../services/passenger.service';
import { ReturnflightsService } from '../services/returnflights.service';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutForm:FormGroup;
  booking:Booking;
  returnbooking:ReturnBooking;
  seat_nos= sessionStorage.getItem("seatnos");
  username=sessionStorage.getItem("username");
  travel_date=sessionStorage.getItem("travel_date");
  count:number=parseInt(sessionStorage.getItem("count"));
  upcost:number=parseInt(sessionStorage.getItem("cost"));
  schedule_id=parseInt(sessionStorage.getItem("schedule_id"));
  downcost:number=0;
  return_schedule_id=parseInt(sessionStorage.getItem("return_schedule_id"));
  return_seat_nos= sessionStorage.getItem("returnseatnos");
  return_date=sessionStorage.getItem("return_date");
  result:any;
  dummy:any;
  returnresult:any;
  ticket:Ticket;
  passengersid:number[]=[];
  seatnumbers:string[]=[];
  
  // passengerdetails:passenger[];
  // passenger:any;
  constructor(private passengerService:PassengerService,private router:Router,private bookingService:BookingService,private ticketService:TicketService,
    private returnflightservice:ReturnflightsService) {
    this.booking=new Booking();
    this.returnbooking= new ReturnBooking();
    this.ticket=new Ticket();
    console.log(sessionStorage.getItem("return_date"));
    if(sessionStorage.getItem("return_date")!=""){
      this.downcost=parseInt(sessionStorage.getItem("returncost"));
    }
   }

  ngOnInit(): void {
    this.checkoutForm= new FormGroup({
      name:new FormControl('',Validators.required),
      card_number:new FormControl('',[Validators.required,Validators.pattern('[0-9-]*')]),
      expiry_month:new FormControl('',[Validators.required,Validators.pattern('[0-9]*'),Validators.min(1),Validators.max(12)]),
      expiry_year:new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.min(2021),Validators.max(2026)]),
      cvv:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(3)])
    });
    // this.booking = new Booking(this.username,this.totalcost,this.schedule_id);
    // this.passengersid= JSON.parse(sessionStorage.getItem("passengers"));
    // for(let index=0;index<this.passengersid.length;index++){
    //   this.passengerService.getpassengerdetailsusingapi(this.passengersid[index]).subscribe(data=>{this.passenger=data}
    //     this.pushdata(this.passenger))
    // }

  }
  // pushdata(passenger:any){

  // }
  get name(){return this.checkoutForm.get('name')}
  get card_number(){return this.checkoutForm.get('card_number')}
  get expiry_month(){return this.checkoutForm.get('expiry_month')}
  get expiry_year(){return this.checkoutForm.get('expiry_year')}
  get cvv(){return this.checkoutForm.get('cvv')}
  get f(){
    return this.checkoutForm.controls;
  }
  
  onsubmit(){
    // this.dummy = parseInt(sessionStorage.getItem("return_schedule_id"));
    this.booking.schedule_id=parseInt(sessionStorage.getItem("schedule_id"));
    this.bookingService.addbookingusingapi(this.booking).subscribe(data=>{this.result=data 
      sessionStorage.setItem("booking_id",this.result.booking_id)});

      if(sessionStorage.getItem("return_date")!=""){
        this.returnbooking.schedule_id = parseInt(sessionStorage.getItem("return_schedule_id"));
        console.log(this.returnbooking);
        this.returnflightservice.addreturnbookingusingapi(this.returnbooking).subscribe(data=>{this.returnresult=data
          sessionStorage.setItem("return_booking_id",this.returnresult.booking_id)});
      }
  }
  
  generateticket(){
   this.router.navigateByUrl("pdfgeneration");
  }
  cancel(){
    sessionStorage.removeItem("count");
    sessionStorage.removeItem("schedule_id");
    sessionStorage.removeItem("travel_date");
    sessionStorage.removeItem("passengers");
    sessionStorage.removeItem("seatnos");
    sessionStorage.removeItem("cost");
    sessionStorage.removeItem("bookreturn");
    sessionStorage.removeItem("returnseatnos");
    sessionStorage.removeItem("returncost");
    sessionStorage.removeItem("return_date");
    sessionStorage.removeItem("return_schedule_id");
    this.router.navigate(['Home']);
  }
  }

