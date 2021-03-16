import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Display } from '../models/display.model';
import { Flight } from '../models/flightsearch.model.';
import { FareService } from '../services/fare.service';
import { FlightsearchService } from '../services/flightsearch.service';
import { ReturnfareService } from '../services/returnfare.service';

@Component({
  selector: 'app-displayflights',
  templateUrl: './displayflights.component.html',
  styleUrls: ['./displayflights.component.css']
})
export class DisplayflightsComponent implements OnInit {
  
  @Input() result_flights:Display[];
  @Input() return_flights:Display[];
  @Input() travellers:number;
  flightslist:any;
  flight:Flight;
  fares:any;
  s:number;
  returnfares:any;
  bookreturn:string="false";
  constructor(private searchservice:FlightsearchService,private fareservice:FareService,private returnfareservice:ReturnfareService,private router:Router) { 
    // this.newUser=new Flight();
    // console.log(this.newUser);
    this.flight=new Flight();
  }

  setforward(schedule_id){
    sessionStorage.setItem("schedule_id",schedule_id);
    // sessionStorage.setItem("count",this.travellers.toString())
  }
  setbackward(schedule_id){
    sessionStorage.setItem("return_schedule_id",schedule_id);
    // sessionStorage.setItem("count",this.travellers.toString())
  }
  setflag(){
    this.fareservice.getfare(parseInt(sessionStorage.getItem("schedule_id"))).subscribe(f=>{this.fares=f
      sessionStorage.setItem("efare",this.fares.economy_class_fare),
      sessionStorage.setItem("ffare",this.fares.first_class_fare),
      sessionStorage.setItem("bfare",this.fares.business_class_fare),
      sessionStorage.setItem("pfare",this.fares.premium_class_fare)
      console.log(this.fares)});
    if(sessionStorage.getItem("return_date")!=""){
      sessionStorage.setItem("bookreturn","true");
        this.returnfareservice.getreturnfare(parseInt(sessionStorage.getItem("return_schedule_id"))).subscribe(f=>{this.returnfares=f
        sessionStorage.setItem("refare",this.returnfares.economy_class_fare),
        sessionStorage.setItem("rffare",this.returnfares.first_class_fare),
        sessionStorage.setItem("rbfare",this.returnfares.business_class_fare),
        sessionStorage.setItem("rpfare",this.returnfares.premium_class_fare)
        console.log(this.returnfares)});
      }
  }
  setfares(){
    this.router.navigate(['seatlayout']);
  }
  ngOnInit(): void {
    sessionStorage.setItem("bookreturn",this.bookreturn);
  }

}
