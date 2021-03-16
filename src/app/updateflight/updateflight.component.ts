import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { Flight } from '../models/flight.model';
import { FlightService } from '../services/flight.service';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-updateflight',
  templateUrl: './updateflight.component.html',
  styleUrls: ['./updateflight.component.css']
})
export class UpdateflightComponent implements OnInit {

  flights:any;
  statusvalid:string[];
  flight:Flight;
  msg:string;
  city:string[];
  constructor(private FlightService:FlightService) {
    this.flight=new Flight();
    this.city=["Thoothukudi",
    "Chennai","Thiruvananthapuram","Pondicherry","PortBlair","Goa","Delhi","Mumbai","Srinagar","Surat","Kadapa","Nellore",
    "Patna","Chandigarh","Delhi","Ahmedabad","Shimla","Srinagar","Ranchi","Bangalore","Mysore","Kochi","Kollam","Navi Mumbai","Pune",
    "Madurai","Trichy","Salem","Coimbatore","Neyveli","Hosur","Hyderbad","Allahabad"];
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
