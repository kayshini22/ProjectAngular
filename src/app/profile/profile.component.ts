import { Component, OnInit } from '@angular/core';
import { user } from '../models/user.model';
import { userService } from '../services/user.service';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { passenger } from '../models/passenger.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:any;
  constructor(private userService:userService) { 
   
  }
  ngOnInit(): void {
    this.userService.getuserusingapi(sessionStorage.getItem("username")).subscribe(data=>{this.user=data;});
  }

update(){
  this.userService.updateuserusingapi(sessionStorage.getItem("username"),this.user).subscribe(data=>{this.user=data;
  });

  
}
}
