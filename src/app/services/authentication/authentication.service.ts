import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
isAuthenticated:boolean=false;
username:string;
admin:string;
isadminauthenticated=false;
  constructor(private router:Router) { }

  authenticate(username){
    this.username=username;
    sessionStorage.setItem("username",username);
    this.isAuthenticated = true;
    console.log(this.isAuthenticated);
    if(sessionStorage.getItem("schedule_id")!=null){
      this.router.navigate(['seatlayout']);
    }
    else{
      this.router.navigate(['Home']);
    }
  }

  authenticateadmin(adminname){
    // this.admin=adminname;
    sessionStorage.setItem("admin",adminname);
    this.isadminauthenticated=true;
    this.router.navigateByUrl("/admin");
  }
  logout(){
    this.isAuthenticated=false;
    this.username=null;
    this.router.navigate(['Login']);
    // sessionStorage.empty();
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("count");
    sessionStorage.removeItem("schedule_id");
    sessionStorage.removeItem("travel_date");
    sessionStorage.removeItem("passengers");
    sessionStorage.removeItem("seatnos");
    sessionStorage.removeItem("booking_id");
    sessionStorage.removeItem("cost");
    sessionStorage.removeItem("ticket_id");
    sessionStorage.removeItem("returnticket_id");
    sessionStorage.removeItem("bookreturn");
    sessionStorage.removeItem("returnseatnos");
    sessionStorage.removeItem("return_booking_id");
    sessionStorage.removeItem("returncost");
    sessionStorage.removeItem("return_date");
    sessionStorage.removeItem("return_schedule_id");
    sessionStorage.removeItem("efare");
    sessionStorage.removeItem("bfare");
    sessionStorage.removeItem("ffare");
    sessionStorage.removeItem("pfare");
    sessionStorage.removeItem("refare");
    sessionStorage.removeItem("rbfare");
    sessionStorage.removeItem("rffare");
    sessionStorage.removeItem("rpfare");

    // sessionStorage.removeItem("ticket_id");
  }
  adminlogout(){
    this.isadminauthenticated=false;
    this.router.navigate(['adminlogin']);
  }
}
