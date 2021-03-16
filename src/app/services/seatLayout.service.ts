import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeatLayoutService {

  constructor(private httpClient:HttpClient) { }
  public getBookedSeats(schedule_id:number)
    {
        return this.httpClient.get("http://localhost:60162/api/SeatLayout/"+schedule_id);
    }
}
