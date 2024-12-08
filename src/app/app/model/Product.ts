export class Product{
  name:String;
  barcode:String;
  catagory:String;
  image_url:String;
  size:String;
  qty:Number
  unit_price:Number;

  constructor(name:String,barcode:String, catagory:String, image_url:String, size:String, qty:Number,unit_price:Number){
    this.name=name;
    this.barcode=barcode;
    this.catagory=catagory;
    this.image_url=image_url;
    this.size=size;
    this.qty=qty;
    this.unit_price=unit_price;
  }



}