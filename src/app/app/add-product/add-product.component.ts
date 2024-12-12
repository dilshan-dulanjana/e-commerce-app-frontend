import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../model/Product';
import JsBarcode from 'jsbarcode';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-add-product',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {



  constructor(private http: HttpClient) { }

  public product: Product = new Product("", "", "", "", "", 0.0, 0.0);



  addProduct() {
    console.log(this.product);
    this.http.post("http://localhost:8080/add-product", this.product).subscribe(res => {
      console.log(res);
      alert("product added!");
    })
  }


  barcodeValue: string = '';



  ngOnInit(): void {
    this.generateUniqueBarcode();
  }

  generateUniqueBarcode(): void {
    this.barcodeValue = uuidv4();
    this.product.barcode = this.barcodeValue;
    this.generateBarcode(this.barcodeValue);
    this.setBarcode();
  }

  generateBarcode(value: string): void {
    JsBarcode('#barcode', value, {
      format: 'CODE128',
      lineColor: '#000',
      width: 2,
      height: 100,
      displayValue: true,
    });
  }

  setBarcode() {
    this.product.barcode = this.barcodeValue;
  }


}
