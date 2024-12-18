import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CartService } from './CartService';
import { Cart } from '../model/Cart';
@Component({
  selector: 'app-home-navigation',
  imports: [IonicModule ,CommonModule,FormsModule ],
  templateUrl: './home-navigation.component.html',
  styleUrl: './home-navigation.component.css'
})
export class HomeNavigationComponent {
  isSidebarOpen = false; // Tracks the sidebar visibility

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
  
  

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen; // Toggle the sidebar state
  }
}
