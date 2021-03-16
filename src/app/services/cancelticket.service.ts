import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { bookedTicket } from '../models/BookingHistory.model';

@Injectable({
  providedIn: 'root'
})
export class CancelticketService {

  constructor(public httpClient: HttpClient) { }
  public cancel(ticket:bookedTicket)
  {
    return this.httpClient.put("http://localhost:60162/api/CancelTicket",ticket);
  }
}
