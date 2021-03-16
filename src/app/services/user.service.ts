import {Injectable} from '@angular/core';
import { user } from '../models/user.model';
import {HttpClient} from '@angular/common/http';
import { passenger } from '../models/passenger.model';

@Injectable()
export class userService{

    constructor(private httpClient:HttpClient,private puthttp:HttpClient){
    }
    public registeruserusingapi(Reguser:user){
        return this.httpClient.post("http://localhost:60162/api/Register",Reguser);
    }
    public logincheckusingapi(user:user){
        return this.httpClient.post("http://localhost:60162/api/Login",user);
    }
    public getuserusingapi(username:string){
        return this.puthttp.get("http://localhost:60162/api/Login/?username="+username);
    }
    public updateuserusingapi(username:string,user:user){
        return this.puthttp.put("http://localhost:60162/api/Login/?username="+username,user);
    }
    public addpassengerusingapi(username:string,passenger:passenger){
        return this.httpClient.post("http://localhost:60162/api/passenger/?username="+username,passenger);
    }
    public getpassengersusingapi(username:string){
        return this.puthttp.get("http://localhost:60162/api/passenger/?username="+username);
    }
    public deletepassengerusingapi(passenger_id:number){
        return this.httpClient.delete("http://localhost:60162/api/passenger/?passenger_id="+passenger_id)
    }
}