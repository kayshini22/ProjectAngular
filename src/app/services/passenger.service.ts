import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {

  constructor(private gethttp:HttpClient) { }
  public getpassengerdetailsusingapi(id:number)
{
  return this.gethttp.get("http://localhost:60162/api/passenger/"+id);
}
}
