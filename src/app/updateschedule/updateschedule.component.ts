import { Component, OnInit } from '@angular/core';
import { Schedule } from '../models/Schedule.model';
import { ScheduleService } from '../services/schedule.service';

@Component({
  selector: 'app-updateschedule',
  templateUrl: './updateschedule.component.html',
  styleUrls: ['./updateschedule.component.css']
})
export class UpdatescheduleComponent implements OnInit {

  schedules:any;
  schedulestatus:string[];
  schedule:Schedule;
  msg:any;
  submitted=false;
  constructor(private scheduleservice:ScheduleService) { 
    this.schedulestatus=["Scheduled","Cancelled"];
    this.schedule=new Schedule();
    this.scheduleservice.getschedulefromapi().subscribe(data=>{
      this.schedules = data;});
   }
   findFlight(fid:any)
   {
     
     var id =fid.value;
     console.log(fid);//writing in log for our refernce
     this.schedules.forEach((element: Schedule) =>   
     {
       if(element.schedule_id == id)
       this.schedule=element;
  
     });
   }
    updateScheduleData()
   {
     this.scheduleservice.updateScheduleUsingApi(this.schedule.schedule_id,this.schedule).subscribe(msg=>
       console.log("Called")
     )
     this.msg="Values updated";
   };
  
   onSubmit()
   {
   this.submitted=true;
   }
  ngOnInit(): void {
  }

}
