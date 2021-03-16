export class passenger{
    passenger_id:number;
    username:string;
    name:string;
    address:string;
    gender:string;
    age:number;
    profession:string;
    phone:string;
   constructor(passenger_id:number=0,username:string="",name:string="",address:string="",gender:string="",age:number=0,profession:string=null,phone:string="") {
      this.passenger_id=passenger_id;
      this.username=username;
      this.name=name;
      this.address=address;
      this.gender=gender;
      this.profession=profession;
      this.phone=phone;
   }
}