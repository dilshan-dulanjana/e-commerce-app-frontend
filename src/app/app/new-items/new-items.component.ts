import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-new-items',
  imports: [FormsModule, IonicModule ,CommonModule],
  templateUrl: './new-items.component.html',
  styleUrl: './new-items.component.css'
})
export class NewItemsComponent {

  selectproduct:any={}

  firstfucncton(){
    this.selectproduct=this.products[0];
  }
  function2(){
    this.selectproduct=this.products[1];
  }
 
  function3(){
    this.selectproduct=this.products[2];
  }

  function4(){
    this.selectproduct=this.products[3];
  }
  function5(){
    this.selectproduct=this.products[4];
  }
  



  products=[
    {
      img1:"./assets/images/products/jacket-3.jpg",
      img2:"./assets/images/products/jacket-4.jpg",
      showcase_category:"jacket",
      showcase_title:"Mens Winter Leathers Jackets",
      price:"$48.00",
      del:"$75.00"

    },
    {
      img1:"./assets/images/products/shirt-1.jpg",
      img2:"./assets/images/products/shirt-2.jpg",
      showcase_category:"shirt",
      showcase_title:"Pure Garment Dyed Cotton Shirt",
      price:"$45.00",
      del:"$56.00"

    },
    {
      img1:"./assets/images/products/jacket-5.jpg",
      img2:"./assets/images/products/jacket-6.jpg",
      showcase_category:"Jacket",
      showcase_title:"MEN Yarn Fleece Full-Zip Jacket",
      price:"$58.00",
      del:"$65.00"

    },
    {
      img1:"./assets/images/products/clothes-3.jpg",
      img2:"./assets/images/products/clothes-4.jpg",
      showcase_category:"skirt",
      showcase_title:"Black Floral Wrap Midi Skirt",
      price:"$25.00",
      del:"$35.00"

    }
    ,
    {
      img1:"./assets/images/products/watch-3.jpg",
      img2:"./assets/images/products/watch-4.jpg",
      showcase_category:"watches",
      showcase_title:"Pocket Watch Leather Pouch",
      price:"$150.00",
      del:"$170.00"

    }
  ];
}
