import { Component, OnInit } from '@angular/core';
import { Schedule } from '../models/Schedule.model';
import { ScheduleService } from '../services/schedule.service';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  schedulestatus:string[];
  check:any;
  msg:any;
  schedule:Schedule;
  heroForm:NgForm;

  constructor(private scheduleservice:ScheduleService) {
    this.schedule=new Schedule();
    this.schedulestatus=["Scheduled","Cancelled"];
    this.scheduleservice.getflightidfromapi().subscribe((u:any)=>{this.check=u;console.log(u)}
    );
   }
  //  Add(schedule:Schedule)
  //  {
  //    console.log(schedule);
  //    this.scheduleservice.addScheduleUsingApi(schedule).subscribe(data=>console.log(data),err=>err.error.Message);
  //    this.msg="Values added";
     
  //  }
  InsertSchedule()
  {   
    this.scheduleservice.addScheduleUsingApi(this.schedule).subscribe(data=>console.log(data),err=>err.error.Message);
    this.msg="Values added";
    this.heroForm.reset();
   }
  ngOnInit(): void {
  }

}
