// import { Component } from '@angular/core';
// import { Cart } from '../model/Cart';
// import { Injectable } from '@angular/core';

// @Component({
//   selector: 'app-add-to-cart',
//   imports: [],
//   templateUrl: './add-to-cart.component.html',
//   styleUrl: './add-to-cart.component.css'
// })



// @Injectable({
//   providedIn: 'root' // Makes it globally available
// })
// export class AddToCartComponent  {

//   public cartItem :Cart=new Cart(1,"","",0.0,0.0,0.0);

//   public selecetedItemList:any =[];

//    public addItem(product:Cart){

//   this.selecetedItemList.push(product);

//   }

//   public  clearCart(){
//     this.selecetedItemList=[];

//   }

//   public removeItem(cartId:Number){

//     this.selecetedItemList = this.selecetedItemList.filter((item:Cart) => item.id !== cartId);
//   }

//   public updateData(changeCart:Cart){
//     const qty = Number(changeCart.qty);         
//     const unitPrice = Number(changeCart.unitPrice);

//     changeCart.total = qty * unitPrice;

//   }


// }



import { Component } from '@angular/core';
import { Cart } from '../model/Cart';
import { CartService } from '../home-navigation/CartService';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-to-cart',
  imports:[CommonModule ,FormsModule],
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css'],
})
export class AddToCartComponent {
  constructor(private cartService: CartService) {

    this.selecetedItemList=cartService.getItems();
    this.TotalAmount=cartService.getTotalAmount();

  }


  public selectQty: Number =new Number(0);

  public cartItem :Cart=new Cart(1,"","",0.0,0.0,0.0);
  public selecetedItemList:any =[];

   public  TotalAmount:any =0;
 


  addItemToCart(product: Cart) {
    
    this.cartService.addItem(product);
  }

  clearCartItems() {
    this.cartService.clearCart();
  }

  removeCartItem(cartId: number) {
    console.log(cartId);
    this.cartService.removeItem(cartId);
  }

  updateData(cart: Cart ) {
      
     console.log(cart ,this.selectQty)
    this.cartService.updateData(cart ,this.selectQty);
  }

  qtyIncrement(cart: Cart,nowQty:Number){
    const Increment =Number(nowQty)+1;
      this.cartService.qtyIncrement(cart,Increment);
  }

  qtyDecrement(cart: Cart,nowQty:Number){
    const decrement =Number(nowQty)-1;
    this.cartService.qtyDecrement(cart,decrement);
  }



  //////////////////////////////
  name = "Angular Toggle Show Hide";
  showMyContainer: boolean = false;

  status: boolean = false;
  statusLink: boolean = false;
  clickEvent() {
    this.status = !this.status;
    //this.statusLink = !this.statusLink;

    if (this.statusLink) {
      setTimeout(() => {
        this.statusLink = false;
      }, 230);
    } else {
      this.statusLink = true;
    }
  }




}
