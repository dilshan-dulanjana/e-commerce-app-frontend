import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../model/Product';
import JsBarcode from 'jsbarcode';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {

  selectedFile: File | null = null;
  imageUrl: string | null = null;
  isButtonDisabled: boolean = true;

  cloudName: string = 'dxe12sxtl'; // Replace with your Cloudinary cloud name
  uploadPreset: string = 'products'; // Replace with your upload preset

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    this.uploadImage(event)
  }


  
  async uploadImage(event: Event): Promise<void> {
    event.preventDefault();

    if (!this.selectedFile) {
      alert('Please select an image file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile);
    formData.append('upload_preset', this.uploadPreset);

    try {
      // Upload image to Cloudinary
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${this.cloudName}/image/upload`,
        formData
      );
      this.imageUrl = response.data.secure_url;
      this.product.imageUrl=response.data.secure_url;
      this.isButtonDisabled=false;
      // Save the image URL to the database
      
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image. Please try again.');
    }
  }




  constructor(private http: HttpClient) { }

  public product: Product = new Product("", "", "", "", "", 0.0, 0.0);



  addProduct() {
    console.log(this.product);
    this.http.post("http://localhost:8080/add-product", this.product).subscribe(res => {
      console.log(res);
      alert("product added!");
      this.clearFiled();

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

  clearFiled(){
   this.product=new Product("", "", "", "", "", 0.0, 0.0);
   this.product.imageUrl="";
  }


}
