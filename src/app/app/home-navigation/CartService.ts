import { Injectable } from '@angular/core';
import { Cart } from '../model/Cart';

@Injectable({
  providedIn: 'root' // Makes it available globally
})
export class CartService {
  public cartItem: Cart = new Cart(1, '', '', 1, 0.0, 0.0);
  public selectedItemList: Cart[] = [];

  public totalAmount:any =0;

  addItem(product: Cart) {
    console.log("cartservice")
     product.qty=1;
     product.total=product.unitPrice;
   
    this.selectedItemList.push({ ...product });
    this.getTotalAmount()
    
  }

  clearCart() {
    this.selectedItemList = [];
  }

  removeItem(cartId: number) {

    const index = this.selectedItemList.findIndex(item => item.id === cartId);
   
      this.selectedItemList.splice(index, 1); 

  }

  updateData(changeCart: Cart ,selectQty:Number) {
    const qty = Number(selectQty);
    const unitPrice = Number(changeCart.unitPrice);
    changeCart.total = qty * unitPrice;
    this.selectedItemList.push({ ...changeCart });
  }

  public getItems(){
    return this.selectedItemList;
  }

  qtyIncrement(cart: Cart,nowQty:Number){

    const id=cart.id;
    cart.qty=nowQty;
    const unitPrice = Number(cart.unitPrice);
    const qty =Number( nowQty);
    cart.total=unitPrice * qty;;
    const index = this.selectedItemList.findIndex(obj => obj.id === id);

   this. selectedItemList[index] = { ...this.selectedItemList[index], ...cart };


  }
  qtyDecrement(cart: Cart,nowQty:Number){
    
    const id=cart.id;
    cart.qty=nowQty;
    const unitPrice = Number(cart.unitPrice);
    const qty =Number( nowQty);
    cart.total=unitPrice * qty;;
    const index = this.selectedItemList.findIndex(obj => obj.id === id);

   this. selectedItemList[index] = { ...this.selectedItemList[index], ...cart };
    
  }

  getTotalAmount(){
     
    this.selectedItemList.forEach((cart)=>{
      this.totalAmount+=cart.total;
      console.log(cart.total);

    })

    console.log("mm",this.totalAmount);

    return this.totalAmount;
    
  }
}
