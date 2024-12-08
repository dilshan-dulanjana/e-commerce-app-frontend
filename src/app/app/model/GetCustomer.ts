export class GetCustomer{
    id:Number;
    name:String;
    contactNumber:String;
    address:String;
    email:String;
    password:String;

    constructor(id:Number, name:String,contactNumber:String,address:String,email:String,password:String){
        this.id = id;
         this.name=name;
         this.contactNumber=contactNumber;
         this.address=address;
         this.email=email;
         this.password=password;
    }
}