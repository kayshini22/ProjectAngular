import { Component, OnInit } from '@angular/core';
import { DOCUMENT, formatDate } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { userService } from '../services/user.service';
import { user } from '../models/user.model';
import { title } from 'process';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { EncrDecrServiceService } from '../services/encr-decr-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  user:user;
  registerForm:FormGroup;
  msg:string;
  userlogin:user;
  u:any;
  date:Date= new Date();

  constructor(private userService:userService,private AuthenticationService:AuthenticationService,private EncrDecr:EncrDecrServiceService,private router:Router) { 
    this.user = new user();
    this.userlogin=new user();
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      title:new FormControl('',Validators.required),
      firstname:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      lastname:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      username:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.pattern(/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/)]),
      confirm_password:new FormControl('',[Validators.required,Validators.minLength(8)]),
      dob:new FormControl('',[Validators.required]),
      phone:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(15)])
    }, this.pwdMatchValidator);
  }
  register(){
      document.getElementById("login").style.left="-500px";
      document.getElementById("register").style.left="50px";
      document.getElementById("btn").style.left="110px";
  }

  login(){
      document.getElementById("login").style.left="50px";
      document.getElementById("register").style.left="500px";
      document.getElementById("btn").style.left="0px";
  }

  onsubmit(){
    console.log(this.registerForm.value);
    this.user.title=this.registerForm.get('title').value;
    this.user.firstname=this.registerForm.get('firstname').value;
    this.user.lastname=this.registerForm.get('lastname').value;
    this.user.username=this.registerForm.get('username').value;
    this.user.password=this.EncrDecr.set('123456$#@$^@1ERF',this.registerForm.get('password').value);
    this.user.dob=this.registerForm.get('dob').value;
    this.user.phone=this.registerForm.get('phone').value;
    console.log(this.user);
    // console.log(this.registerForm.controls.controlName.setValue(formatDate(this.user.dob,'yyyy-MM-dd','en')));
    // this.user = Object.assign(this.user, this.registerForm.value);
    this.userService.registeruserusingapi(this.user).subscribe(data=>console.log(data),err=>this.msg=err.error.Message);
    this.registerForm.reset();
    alert("Welcome to Infotech Airlines , User Registered Succeessfully");
    this.register();
  }

 onlogin(){
  console.log("login event");
  console.log(this.userlogin);
  console.log(this.EncrDecr.set('123456$#@$^@1ERF',this.userlogin.password));
  this.userService.logincheckusingapi(this.userlogin).subscribe(
    data=>{this.u=data;console.log(this.u)
    if(this.u==this.EncrDecr.set('123456$#@$^@1ERF',this.userlogin.password)){
      console.log("works");
      this.AuthenticationService.authenticate(this.userlogin.username);
    }
    else{
      this.msg="invalid login credentials";
    }

},
    err=>this.msg=err.error.Message); 
 }

  get firstname(){return this.registerForm.get('firstname')}
  get lastname(){return this.registerForm.get('lastname')}
  get username(){return this.registerForm.get('username')}
  get password(){return this.registerForm.get('password')}
  get confirm_password(){return this.registerForm.get('confirm_password')}
  get phone(){return this.registerForm.get('phone')}
  pwdMatchValidator(frm: FormGroup) {
    return frm.get('password').value === frm.get('confirm_password').value
       ? null : {'mismatch': true};
 }
}
