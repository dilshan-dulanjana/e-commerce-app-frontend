import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Admin } from '../model/Admin';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-register',
  imports: [FormsModule,CommonModule],
  templateUrl: './admin-register.component.html',
  styleUrl: './admin-register.component.css'
})
export class AdminRegisterComponent {
 constructor(private http:HttpClient) { }

  
  public admin:Admin= new Admin("","","","","","admin");
  
   
  addAdmin(){
    this.admin.category="admin";
    console.log(this.admin);
    this.http.post("http://localhost:8080/add-admin",this.admin).subscribe(res=>{
      alert("Admin Added successfully!");
      console.log(res);
      this.admin=new Admin("","","","","","");
    })
  }
}
