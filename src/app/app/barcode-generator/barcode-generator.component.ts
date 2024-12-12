import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import JsBarcode from 'jsbarcode';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-barcode-generator',
  imports:[CommonModule,FormsModule],
  templateUrl: './barcode-generator.component.html',
  styleUrls: ['./barcode-generator.component.css']
})
export class BarcodeGeneratorComponent implements OnInit {
  barcodeValue: string = '';

  constructor() {}

  ngOnInit(): void {
    this.generateUniqueBarcode(); // Automatically generate a unique barcode on load
  }

  generateUniqueBarcode(): void {
    this.barcodeValue = uuidv4(); // Generate a unique value
    this.generateBarcode(this.barcodeValue);
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
}
