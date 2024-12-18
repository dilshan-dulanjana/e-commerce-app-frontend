import { Component } from '@angular/core';
import { GetProduct } from '../model/GetProduct';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AddToCartComponent } from '../add-to-cart/add-to-cart.component';
import { Product } from '../model/Product';
import { Cart } from '../model/Cart';
import { CartService } from '../home-navigation/CartService';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item-table',
  imports: [CommonModule ,FormsModule],
  templateUrl: './item-table.component.html',
  styleUrl: './item-table.component.css'
})
export class ItemTableComponent {
      constructor(private http: HttpClient ,private cartService: CartService) {
        this.viewProducts();
      }
    
      public productList:any=[];
    
    
      public searchResult: any = "";
      showModal: boolean = false;
    
  
  
      public upateProducts:GetProduct= new GetProduct(1,"","","","","",0,0)
  
      public product:GetProduct= new GetProduct(1,"","","","","",0,0)
    
    
    
      viewProducts() {
        this.http.get("http://localhost:8080/get-allproduct").subscribe(res => {
          this.productList = res;
          console.log(res);
    
        })
    
      }

      public cartItem :Cart=new Cart(1,"","",0.0,0.0,0.0);

      public inputValue:Number=new Number(0);

      addtoCart(product:GetProduct){


        
        this.cartItem.id=product.id;
        this.cartItem.imageUrl=product.imageUrl;
        this.cartItem.name=product.name;
        this.cartItem.unitPrice =product.unitPrice;
        this.cartService.addItem(this.cartItem);
       
      }

}
