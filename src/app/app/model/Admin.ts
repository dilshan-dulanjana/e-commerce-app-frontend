export class Admin{

    name:String;
    contactNumber:String;
    address:String;
    email:String;
    password:String;
    category: String;
    

    constructor(name:String,contactNumber:String,address:String,email:String,password:String ,category:String){
         this.name=name;
         this.contactNumber=contactNumber;
         this.address=address;
         this.email=email;
         this.password=password;
         this.category=category;
        
    }

}