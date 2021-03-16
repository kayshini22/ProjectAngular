export class user{
    username:string;
    password:string;
    title:string;
    firstname:string;
    lastname:string;
    dob:Date;
    phone:string;
   constructor(username:string="",password:string="",title:string="",firstname:string="",lastname:string="",dob:Date=null,phone:string="") {
      this.username=username;
      this.password=password;
      this.firstname=firstname;
      this.lastname=lastname;
      this.dob=dob;
      this.phone=phone;
     }
    // public constructor(init?: Partial<user>) {
    //     Object.assign(this, init);
    // }
}