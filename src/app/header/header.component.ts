import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  islogged:boolean=false;
  constructor(private AuthenticationService:AuthenticationService) { 
    }

  ngOnInit(): void {
    // if(sessionStorage.getItem("username")!=null){
    //   this.islogged=true;
    // }
    // else{
    //   this.islogged=false;
    // }
  }

  logout(){
    this.AuthenticationService.logout();
  }
}
