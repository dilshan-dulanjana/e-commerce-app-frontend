import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-redcount-items',
  imports: [CommonModule,FormsModule],
  templateUrl: './redcount-items.component.html',
  styleUrl: './redcount-items.component.css'
})
export class RedcountItemsComponent implements OnInit {

  constructor(private http:HttpClient) {}
  ngOnInit(): void {
    this.getRedCardItems()
  }

  cards: any[] = [];

  getRedCardItems() {
    this.http.get<any>("http://localhost:8080/getRedCount").subscribe(
      (res) => {
        console.log(res);
       
        if (res && res.Red_Count_Products) {
          this.cards = res.Red_Count_Products;
        }
      },
      (error) => {
       alert("There is error...!!!");
      }
    );
  }

}
