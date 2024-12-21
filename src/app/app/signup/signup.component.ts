import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Customer } from '../model/Customer';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  imports: [FormsModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

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
