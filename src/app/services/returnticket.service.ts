import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReturnticketService {

  constructor(private http:HttpClient) { }
  public getreturnticketsusingapi(id){
    return this.http.get("http://localhost:60162/api/ReturnTickets/"+id);
  }
}
