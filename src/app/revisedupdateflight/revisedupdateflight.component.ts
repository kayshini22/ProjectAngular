import { Component, OnInit } from '@angular/core';
import { Flight } from '../models/flight.model';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-revisedupdateflight',
  templateUrl: './revisedupdateflight.component.html',
  styleUrls: ['./revisedupdateflight.component.css']
})
export class RevisedupdateflightComponent implements OnInit {

  flights:any;
  statusvalid:string[];
  flight:Flight;
  msg:string;
  city:string[];
  constructor(private FlightService:FlightService) {
    this.flight=new Flight();
    this.city=["Chennai","Coimbatore","Hyderabad","Pune","Mumbai","Madurai","Delhi","Kolkata","Ahmedabad","Kochi","Banglore","Chandigarh","Mysore","Goa"];
    this.statusvalid=["Servicable","Under-Maintainance","Discarded"];
    this.msg="";
    this.FlightService.getAllFlightsFromApi().subscribe(data=>{
      this.flights = data;console.log(this.flights)});
   }
   findFlight(fid:any)
  {
    var id =fid.value;
    console.log(fid);//writing in log for our refernce
    this.flights.forEach((element: Flight) =>   
    {
      if(element.flight_id == id)
      this.flight=element;
 
    });
  }
  // onSubmit():any
  // {
      
  // }
   updateFlightData()
  {
    this.FlightService.updateFlightUsingApi(this.flight.flight_id,this.flight).subscribe(msg=>
      console.log("Called")
    )
    this.msg="Values updated";
  };
  ngOnInit(): void {
  }

}
