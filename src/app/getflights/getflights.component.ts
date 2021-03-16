import { Component, OnInit } from '@angular/core';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-getflights',
  templateUrl: './getflights.component.html',
  styleUrls: ['./getflights.component.css']
})
export class GetflightsComponent implements OnInit {
  flights:any;
  constructor(private flightservice:FlightService) {
    this.flightservice.getAllFlightsFromApi().subscribe(custs=>{
      this.flights=custs;
    })
   }

  ngOnInit(): void {
  }

}
