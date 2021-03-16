import { Component, OnInit } from '@angular/core';
import { bookedTicket } from '../models/BookingHistory.model';
import { BookinghistoryService } from '../services/bookinghistory.service';
import { CancelticketService } from '../services/cancelticket.service';

@Component({
  selector: 'app-confirmed',
  templateUrl: './confirmed.component.html',
  styleUrls: ['./confirmed.component.css']
})
export class ConfirmedComponent implements OnInit {

  bookedtickets:any;
  sta:string;
  msg:any;
  msgs:any;
  b:any;
  username:string=sessionStorage.getItem("username");
  status:string="upcoming";
  data:any;
  datesent:Date;
  constructor(private bookinghistory:BookinghistoryService,public cancelticket:CancelticketService) { 
    this.bookedtickets=new bookedTicket();
    // console.log("inside");
    // this.username=;
    // this.status=;
    
  }

  ngOnInit(): void {
    this.bookinghistory.getBookingHistory(this.username,this.status).subscribe(u=>this.bookedtickets=u);
    // this.bookinghistory.getBookingHistory(this.username,this.status).subscribe(u=>{this.bookedtickets=u,console.log("subs")});
  }

  onCancel(ticket:bookedTicket)
  {
    var res = confirm("Are you sure you need to cancel the ticket");
    if(res){
      this.cancelticket.cancel(ticket).subscribe(u=>this.data=u);
    }
    alert("ticket cancelled succesffuly");
  }

  reload(){
    this.bookinghistory.getBookingHistory(this.username,this.status).subscribe(u=>this.bookedtickets=u);
  }

  calculatediff(ticket:bookedTicket)
  {
     let currentdate = new Date();
     this.datesent= new Date(ticket.travel_date);
     var diff = (this.datesent.getTime()-currentdate.getTime());
     var diffdays = Math.ceil(diff/(1000*3600*24));
     if(diffdays-1==0)
     {
      console.log("inside");
      var hourdiff = (currentdate.getHours()-this.datesent.getHours());
      var mindiff = (currentdate.getMinutes()-this.datesent.getMinutes());
      hourdiff = hourdiff+(mindiff/60);
      if(hourdiff>3)
         {
        this.onCancel(ticket);
         }
      else{
        alert("ticket can not be cancelled");
          }
     }
     else if(diffdays<0){
      alert("ticket can not be cancelled");
     }
     else{
      this.onCancel(ticket);
     }
  }
}