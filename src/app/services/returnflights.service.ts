import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReturnBooking } from '../models/returnbooking.model';

@Injectable({
  providedIn: 'root'
})
export class ReturnflightsService {

  constructor(private returnflights:HttpClient) { }
  public getreturnFlightsFromApi(travel_date:string,source_destination:string,target_destination:string,travellers:number)
    {
        return this.returnflights.get("http://localhost:60162/api/Returnflights?travel_date="+travel_date+"&source_destination="+source_destination+"&target_destination="+target_destination+"&no_traveller="+travellers);
       //  http://localhost:62438/api/Search?travel_date=2020-11-08
       //  &source_destination=Bangalore&target_destination=Goa&no_traveller=3
    }
    public addreturnbookingusingapi(returnbooking:ReturnBooking)
    {
       return this.returnflights.post("http://localhost:60162/api/BookReturn",returnbooking);
    }
    
    
}
