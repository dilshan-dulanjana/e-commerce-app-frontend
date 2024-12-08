import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GetCustomer } from '../model/GetCustomer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-page',
  imports: [FormsModule, CommonModule],
  templateUrl: './customer-page.component.html',
  styleUrl: './customer-page.component.css'
})
export class CustomerPageComponent {

  constructor(private http: HttpClient) {
    this.viewCustomers();
  }

  public customerList: any = [];

  public searchResult: any = "";
  showModal: boolean = false;

  public updatecustomer:GetCustomer=new GetCustomer(1,"","","","","");

  public customer:GetCustomer=new GetCustomer(1,"","","","","");

  viewCustomers() {
    this.http.get("http://localhost:8080/get-AllCustomers").subscribe(res => {
      this.customerList = res;
      console.log(res);

    })

  }


  searchCustomerById(customerId: String) {
    const id = Number(customerId);
    if (isNaN(id)) {
      alert('Please enter a valid number');
      return;
    }

    this.http.get(`http://localhost:8080/search-customer/${id}`).subscribe(res => {
      this.searchResult = res;
      this.updatecustomer=this.searchResult;
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

  upateCustomer(){
  

    this.http.put("http://localhost:8080/update-customer",this.updatecustomer).subscribe(res=>{

      alert("update successfull !!!");
      this.closeModal();
      this.viewCustomers();
    })

    console.log(this.updatecustomer);
    
  }


  deleteCustomer(customerID:String){
    const id = Number(customerID);

    this.http.delete(`http://localhost:8080/delete-customer/${id}`).subscribe(res=>{
      alert("customer deleted !!!");
      this.closeModal();
      this.viewCustomers();
    })

  }



}

