export class GetProduct{
    id:Number;
    name:String;
    barcode:String;
    catagory:String;
    imageUrl:String;
    size:String;
    qty:Number
    unitPrice:Number;
  
    constructor(id:Number,name:String,barcode:String, catagory:String, imageUrl:String, size:String, qty:Number,unitPrice:Number){
      this.id=id;
      this.name=name;
      this.barcode=barcode;
      this.catagory=catagory;
      this.imageUrl=imageUrl;
      this.size=size;
      this.qty=qty;
      this.unitPrice=unitPrice;
    }
  
  }