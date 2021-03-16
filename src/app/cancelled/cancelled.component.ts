import { Component, OnInit } from '@angular/core';
import { bookedTicket } from '../models/BookingHistory.model';
import { BookinghistoryService } from '../services/bookinghistory.service';
import { CancelticketService } from '../services/cancelticket.service';

@Component({
  selector: 'app-cancelled',
  templateUrl: './cancelled.component.html',
  styleUrls: ['./cancelled.component.css']
})
export class CancelledComponent implements OnInit {

  bookedtickets:any;
  sta:string;
  msg:any;
  msgs:any;
  b:any;
  username:string=sessionStorage.getItem("username");
  status:string="cancelled";
  data:any;
  constructor(private bookinghistory:BookinghistoryService) { 
    this.bookedtickets=new bookedTicket();
    this.bookinghistory.getBookingHistory(this.username,this.status).subscribe(u=>this.bookedtickets=u);
  }

  ngOnInit(): void {
    
  }
}
