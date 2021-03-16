import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightsearchService {

  constructor(private getflights:HttpClient,private getreturnflights:HttpClient) { }
  public getresultFlightsFromApi(travel_date:string,source_destination:string,target_destination:string,travellers:number)
  {
     return this.getflights.get("http://localhost:60162/api/Search?travel_date="+travel_date+"&source_destination="+source_destination+"&target_destination="+target_destination+"&no_traveller="+travellers);
    //  http://localhost:62438/api/Search?travel_date=2020-11-08
    //  &source_destination=Bangalore&target_destination=Goa&no_traveller=3
    }

    // public getreturnFlightsFromApi(travel_date:string,source_destination:string,target_destination:string,travellers:number)
    // {
    //     return this.getreturnflights.get("http://localhost:62438/api/Search?travel_date="+travel_date+"&source_destination="+source_destination+"&target_destination="+target_destination+"&no_traveller="+travellers);
    //    //  http://localhost:62438/api/Search?travel_date=2020-11-08
    //    //  &source_destination=Bangalore&target_destination=Goa&no_traveller=3
    // }
}
