import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private puthttp:HttpClient) { }
  public addticketusingapi(ticket)
  {
     return this.puthttp.post("http://localhost:60162/api/Tickets",ticket);
  }
  public getticketsusingapi(id){
    return this.puthttp.get("http://localhost:60162/api/Tickets/"+id);
  }
}
