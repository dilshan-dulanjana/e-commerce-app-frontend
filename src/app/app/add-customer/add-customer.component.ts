import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Customer } from '../model/Customer';

@Component({
  selector: 'app-add-customer',
  imports: [FormsModule],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent {

  constructor(private http:HttpClient) { }

  public customer:Customer=new Customer("",0,"","","");

  addcustomer(){
    this.http.post("http://localhost:8080/add-customer",this.customer).subscribe(res=>{
      console.log(res);
    })
  }

}
