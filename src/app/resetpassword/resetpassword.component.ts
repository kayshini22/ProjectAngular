import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResetPassword } from '../models/resetpassword.model';
import { EncrDecrServiceService } from '../services/encr-decr-service.service';
import { ForgetpasswordService } from '../services/forgetpassword.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  resetForm: FormGroup;
    submitted = false;
    urlData:any;
    data:ResetPassword=new ResetPassword();
    localStorageToken:any="";
  constructor(private formBuilder: FormBuilder,
    private activattedrouter: ActivatedRoute,
    private router:Router,
    private forgetpasswordservice:ForgetpasswordService,private EncrDecr:EncrDecrServiceService) {
      this.resetForm=this.formBuilder.group({});
     }

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      newPass: ['', Validators.required],
      confirmPass: ['', Validators.required],
  });
  this.activattedrouter.queryParams.subscribe(params => {
    this.urlData=params;
  });
  }

  get f() { return this.resetForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.resetForm.invalid || this.resetForm.value.newPass != this.resetForm.value.confirmPass) {
      alert("Invalid Entry");  
      return;
    }

    this.localStorageToken = localStorage.getItem("returnedToken")?.toString();
    var decryptedLocalStorageToken=CryptoJS.AES.decrypt(this.localStorageToken,"Hi,Django,Thisisthekeyforencryptingtoken");
    console.log(this.localStorageToken+"---"+decryptedLocalStorageToken.toString(CryptoJS.enc.Utf8));
    console.log(this.urlData.id);
    console.log(this.urlData.token);
    console.log(this.urlData.id==localStorage.getItem("returnedID"));
    console.log(this.urlData.token==decryptedLocalStorageToken.toString(CryptoJS.enc.Utf8));
    // this.user.password=this.EncrDecr.set('123456$#@$^@1ERF',this.resetForm.value.newPass;);
    if(this.urlData.id==localStorage.getItem("returnedID") && this.urlData.token==decryptedLocalStorageToken.toString(CryptoJS.enc.Utf8)){
      
      this.data.username=this.urlData.id;
      this.data.password=this.EncrDecr.set('123456$#@$^@1ERF',this.resetForm.value.newPass);
      this.forgetpasswordservice.savePass(this.data).subscribe(data=>{alert("password changed")},
        err=>{alert(err.err.message+"errors")});
    }
    else{
      alert("Access Denied");
      localStorage.clear();
    }
}
}
