import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { GetCustomer } from '../model/GetCustomer';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GetProduct } from '../model/GetProduct';

@Component({
  selector: 'app-product-page',
  imports: [FormsModule,CommonModule],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {

  
    constructor(private http: HttpClient) {
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
  
  
    searchProductById(productID: String) {
      const id = Number(productID);
      if (isNaN(id)) {
        alert('Please enter a valid number');
        return;
      }
  
      this.http.get(`http://localhost:8080/search-product/${id}`).subscribe(res => {
        this.searchResult = res;
        this.upateProducts=this.searchResult;
        this.showModal = true;
  
      }
        ,
        (err) => {
          console.error('Error fetching customer data:', err);
          alert('Customer not found!');
        }
      )
  
    }
  
    closeModal(): void {
      this.showModal = false; // Close the modal
    }
  
    upateProduct(){
    
  
      this.http.put("http://localhost:8080/update-product",this.upateProducts).subscribe(res=>{
  
        alert("update successfull !!!");
        this.closeModal();
        this.viewProducts();
      })
  
      console.log(this.upateProducts);
      
    }
  
  
    deleteProduct(productID:String){
      const id = Number(productID);
  
      this.http.delete(`http://localhost:8080/delete-product/${id}`).subscribe(res=>{
        alert("product deleted !!!");
        this.closeModal();
        this.viewProducts();
      })
  
    }
}
