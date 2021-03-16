import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from '../models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private puthttp:HttpClient) { }
  public addbookingusingapi(booking:Booking)
  {
     return this.puthttp.post("http://localhost:60162/api/Booking",booking);
  }
}
