import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sig-in',
  imports: [RouterLink],
  templateUrl: './sig-in.component.html',
  styleUrl: './sig-in.component.css'
})
export class SigINComponent {

  constructor(private http:HttpClient,private  router:Router){}


  

  checkLogin(email:String,password:String){

    this.http.get(`http://localhost:8080/checkLoging/${email},/${password}`).subscribe(res=>{

      switch(res){
        case true :
          alert("Loging Successfully !!!");
          this.router.navigate(["dashboard"]);
          break;
        case false:
          alert("Invalied User Name and Password !!!");
      }

    })



  }

}
