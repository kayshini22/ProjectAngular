import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
isloggedin:boolean=false;
  constructor(private AuthenticationService:AuthenticationService){
    
  }
  ngOnInit(): void {
    this.isloggedin=this.AuthenticationService.isAuthenticated;
  }
 
  logout(){
    this.AuthenticationService.logout();
  }
}
