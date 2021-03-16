import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  msg:string;
  loginForm: FormGroup;
  isSubmitted  =  false;
   usernameadmin:string="Admin";
   passwordadmin:string="admin12345678";
constructor(private authService:AuthenticationService, private router:Router, private formBuilder:FormBuilder ) {
  this.loginForm  =  this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
});
  this.msg="";
 }
 
get formControls() { return this.loginForm.controls; }
 
login(){
  //console.log(this.loginForm.value);
  this.isSubmitted = true;
  if(this.loginForm.invalid){
  return;
  }
  
  if(this.usernameadmin==this.loginForm.value.username && this.passwordadmin==this.loginForm.value.password)
  {
    this.authService.authenticateadmin(this.loginForm.value.username);
    // this.router.navigate('/admin');
  }
  else
    this.msg="Invalid credentials";
}
ngOnInit() {

 }
}