export class Cart{

    id:Number;
    name:String;
    imageUrl:String;
    qty:Number;
    unitPrice:Number;
    total:Number;
 

    constructor(id:Number, name:String, imageUrl:String,qty:Number,unitPrice:Number, total:Number) {
        this.id=id;
        this.name=name;
        this.imageUrl=imageUrl;
        this.qty=qty;
        this.unitPrice=unitPrice;
        this.total=total;
        
    }
  
}