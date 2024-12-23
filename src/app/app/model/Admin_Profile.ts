export class Admin_Profile{
    id:Number;
    name:String;
    contactNumber:String;
    address:String;
    email:String;
    password:String;
    category: String;
    image_url:String;
    

    constructor(id:Number,name:String,contactNumber:String,address:String,email:String,password:String ,category:String,image_url:String){
        this.id=id;
        this.name=name;
         this.contactNumber=contactNumber;
         this.address=address;
         this.email=email;
         this.password=password;
         this.category=category;
         this.image_url=image_url;
        
    }


}