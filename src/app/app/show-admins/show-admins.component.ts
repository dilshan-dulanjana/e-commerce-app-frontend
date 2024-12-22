import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-show-admins',
  imports: [FormsModule,CommonModule],
  templateUrl: './show-admins.component.html',
  styleUrl: './show-admins.component.css'
})
export class ShowAdminsComponent implements OnInit{

  constructor(private http:HttpClient){}

  cards:any=[];
  ngOnInit(): void {
   this.ShowAdmins();
  }


  ShowAdmins(){

    this.http.get("http://localhost:8080/get-admin").subscribe(res=>{
      this.cards=res;

    })
  }




}
