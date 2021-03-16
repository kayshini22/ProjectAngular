import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookinghistoryService {

  constructor(public httpClient: HttpClient) {
   }
   public getBookingHistory(username:string, status:string)
   {
     return this.httpClient.get("http://localhost:60162/api/BookingHistory?username="+username+"&status="+status);
   }
}
