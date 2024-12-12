export class Product{
  name:String;
  barcode:String;
  catagory:String;
  imageUrl:String;
  size:String;
  qty:Number
  unitPrice:Number;

  constructor(name:String,barcode:String, catagory:String, imageUrl:String, size:String, qty:Number,unitPrice:Number){
    this.name=name;
    this.barcode=barcode;
    this.catagory=catagory;
    this.imageUrl=imageUrl;
    this.size=size;
    this.qty=qty;
    this.unitPrice=unitPrice;
  }



}