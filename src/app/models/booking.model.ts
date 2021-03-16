import { scheduled } from "rxjs";

export class Booking{

    username:string;
    cost:number;
    schedule_id:number;
    constructor(username:string=sessionStorage.getItem("username"),cost:number=parseInt(sessionStorage.getItem("cost")),schedule_id:number=0){
        this.username=username;
        this.cost=cost;
        this.schedule_id=schedule_id;
    }
}