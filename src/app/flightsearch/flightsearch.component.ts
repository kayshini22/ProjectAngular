import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,NgForm,Validators} from '@angular/forms';
import { Flight } from '../models/flightsearch.model.';



import {FlightsearchService} from '../services/flightsearch.service';
import { ReturnflightsService } from '../services/returnflights.service';


@Component({
  selector: 'app-search-flight',
  templateUrl: './flightsearch.component.html',
  styleUrls: ['./flightsearch.component.css']
})
export class SearchFlightComponent implements OnInit
 {
  flight:Flight;
  searchForm:FormGroup;
  msg:any;
  flights:any;
  returnflights:any;
  classlist:string[];
  citylist:string[];

  

  //  sf(searchflight:NgForm) : void{
  //    console.log(searchflight.value);
  //  }

   constructor(private searchService:FlightsearchService,private returnflightsservice:ReturnflightsService)
   {
     this.flight=new Flight();
     this.citylist=["Thoothukudi",
      "Chennai","Thiruvananthapuram","Pondicherry","PortBlair","Goa","Delhi","Mumbai","Srinagar","Surat","Kadapa","Nellore",
      "Patna","Chandigarh","Delhi","Ahmedabad","Shimla","Srinagar","Ranchi","Bangalore","Mysore","Kochi","Kollam","Navi Mumbai","Pune",
      "Madurai","Trichy","Salem","Coimbatore","Neyveli","Hosur","Hyderbad","Allahabad"];
     this.classlist=["Economy","Premium","First","Business"];
     this.searchForm=new FormGroup({
      travel_date:new FormControl('',Validators.required),
      source_destination:new FormControl('',Validators.required),
      target_destination:new FormControl('',Validators.required),
      travellers:new FormControl('',[Validators.required,Validators.pattern("(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)")]),
      flight_class:new FormControl('',Validators.required),
      return_date:new FormControl('',Validators.required)
    })
   }

   get f(){
    return this.searchForm.controls;
  }

 onSubmit()
 {
   console.log(this.searchForm.value);
   console.log("fired");
   this.flight.travel_date=this.searchForm.get('travel_date')?.value;
   this.flight.return_date=this.searchForm.get('return_date')?.value;
   this.flight.source_destination=this.searchForm.get('source_destination')?.value;
   this.flight.target_destination=this.searchForm.get("target_destination")?.value;
   this.flight.travellers=this.searchForm.get("travellers")?.value;
   sessionStorage.setItem("count",this.flight.travellers.toString());
   sessionStorage.setItem("travel_date",this.flight.travel_date);
   sessionStorage.setItem("return_date",this.flight.return_date);
   console.log(this.flight.travel_date);
   console.log(this.flight.return_date);
   
   this.searchService.getresultFlightsFromApi(this.flight.travel_date,this.flight.source_destination,this.flight.target_destination,this.flight.travellers).subscribe(
     data=>{this.flights=data,console.log(this.flights)},err=>err.error.Message);
   
     this.returnflightsservice.getreturnFlightsFromApi(this.flight.return_date,this.flight.target_destination,this.flight.source_destination,this.flight.travellers).subscribe(
      data=>{this.returnflights=data,console.log(this.returnflights)},err=>err.error.Message);
   
      this.msg="flights fetched";
}
// get travellers(){return this.searchForm.get('travellers')}

ngOnInit():void{  }

}
