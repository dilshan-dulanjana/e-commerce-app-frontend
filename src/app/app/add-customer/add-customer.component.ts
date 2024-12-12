import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Customer } from '../model/Customer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-customer',
  imports: [FormsModule,CommonModule],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent {

  constructor(private http:HttpClient) { }

  public customer:Customer=new Customer("","","","","");

  addcustomer(){
    this.http.post("http://localhost:8080/add-customer",this.customer).subscribe(res=>{
      alert("Customer Added successfully!");
      console.log(res);
      this.customer=new Customer("","","","","");
    })
  }

}
