import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import bootstrap, { Modal } from 'bootstrap';
import { HttpClient } from '@angular/common/http';
import { Bill } from '../model/Bill';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-payments',
  imports: [CommonModule,FormsModule],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.css'
  
 
})
export class PaymentsComponent implements OnInit{
  customername: string = "";
  Bill_Id: number = 0;
  billData: any = {};
  items: any={};

  constructor(private renderer: Renderer2, private el: ElementRef ,private http:HttpClient) {



  }


  bill = {
    customer_Id: 6,
    bill_Total: 35.00,
    billItems: [
      {
        product_ID: 19,
        qty: 2,
        total_Amount: 20.00
      },
      {
        product_ID: 21,
        qty: 1,
        total_Amount: 15.00
      }
    ]
  };
// Transforming the object
 transformedObject = {
bill: {
  customer_Id: this.bill.customer_Id,
  bill_Total: this.bill.bill_Total
},
billItems: this.bill.billItems
};





  invoiceData = {
    customerName: 'John Doe',
    date: '2024-12-20',
    amount: 150,
    items: [
      { name: 'Product 1', quantity: 2, price: 50 },
      { name: 'Product 2', quantity: 1, price: 50 },
    ],
  };


  confirmViewInvoice() {
    const userConfirmed = window.confirm('Payemnt Succesfull !!!');
    if (userConfirmed) {
      this.openModal();
      this.getBillData();
    }
  }


  openModal() {
    const modalElement = document.getElementById('invoiceModal')!;
    const modal = new Modal(modalElement);
    modal.show();
  }



  downloadPdf() {
    const element = document.getElementById('printableInvoice') as HTMLElement;
  
    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 190;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
  
      pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
      pdf.save('invoice.pdf');
    });
  }
  



  ngOnInit(): void {
    // this.getBillData();
  }

 
  getBillData() {
    this.http.post("http://localhost:8080/bill", this.transformedObject).subscribe(
      (response: any) => {
        if (response) {
          this.billData = response;
          this.items = response.Items || []; // Extract Items array
          
          
          if (this.items.length > 0) {
            this.customername = this.items[0].name; 
          } else {
            this.customername = '';
          }
  
          this.Bill_Id = response.Bill_Id; 
  
          
          this.invoiceData.amount = this.items.reduce(
            (total: number, item: { Total_Amount: number }) => total + item.Total_Amount,
            0
          );
  
          console.log("Bill ID:", this.Bill_Id);
          console.log("Invoice Amount:", this.invoiceData.amount);
        } 
      }
    );
  }
  
}
