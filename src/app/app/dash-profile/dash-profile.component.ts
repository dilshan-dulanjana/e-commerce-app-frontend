import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Admin } from '../model/Admin';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dash-profile',
  imports: [CommonModule,FormsModule],
  templateUrl: './dash-profile.component.html',
  styleUrl: './dash-profile.component.css'
})
export class DashProfileComponent {

  constructor(private http:HttpClient){}
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
