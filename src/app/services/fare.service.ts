import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FareService {

  constructor(private httpClient:HttpClient) {
   }

   public getfare(schedule_id:number)
   {
    return this.httpClient.get("http://localhost:60162/api/Fare/"+schedule_id);
   }
}
