import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../services/schedule.service';

@Component({
  selector: 'app-schedulelist',
  templateUrl: './schedulelist.component.html',
  styleUrls: ['./schedulelist.component.css']
})
export class SchedulelistComponent implements OnInit {
schedules:any;
  constructor(private scheduleservice:ScheduleService) { 
    this.scheduleservice.getschedulefromapi().subscribe(custs=>{
      this.schedules=custs,console.log(custs)
    })
  }

  ngOnInit(): void {
  }

}
