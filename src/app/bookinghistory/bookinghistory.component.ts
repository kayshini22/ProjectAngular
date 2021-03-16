import { Component, OnInit } from '@angular/core';
import { bookedTicket } from '../models/BookingHistory.model';
import { BookinghistoryService } from '../services/bookinghistory.service';
import { CancelticketService } from '../services/cancelticket.service';

@Component({
  selector: 'app-bookinghistory',
  templateUrl: './bookinghistory.component.html',
  styleUrls: ['./bookinghistory.component.css']
})
export class BookinghistoryComponent implements OnInit {

  bookedtickets:any;
  sta:string;
  msg:any;
  msgs:any;
  b:any;
  username:string=sessionStorage.getItem("username");
  status:string="upcoming";
  data:any;

  constructor(private bookinghistory:BookinghistoryService,public cancelticket:CancelticketService) { 
    this.bookedtickets=new bookedTicket();
    this.bookinghistory.getBookingHistory(this.username,this.status).subscribe(u=>this.bookedtickets=u);
  }

  ngOnInit(): void {
    
  }

  onCancel(ticket:bookedTicket)
  {
    this.cancelticket.cancel(ticket).subscribe(u=>this.data=u);
    // alert("ticket deleted");
  }

  reload(){
    this.bookinghistory.getBookingHistory(this.username,this.status).subscribe(u=>this.bookedtickets=u);
  }
  openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
}
