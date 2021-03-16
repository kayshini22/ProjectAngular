import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResetPassword } from '../models/resetpassword.model';

@Injectable({
  providedIn: 'root'
})
export class ForgetpasswordService {

  constructor(private hc:HttpClient) { }
  public sendMail(username:string){
    //Change the link
    return this.hc.get("http://localhost:60162/api/ForgetPassword?username="+username);
}

public savePass(d:ResetPassword){
    //Change the link
    return this.hc.put("http://localhost:60162/api/ForgetPassword",d);
}
}
