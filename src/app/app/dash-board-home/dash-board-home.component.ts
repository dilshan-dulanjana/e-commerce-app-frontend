import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

declare const google: any; // Declare Google Charts for TypeScript compatibility
declare const CanvasJS: any; // Declare CanvasJS for TypeScript compatibility

@Component({
  selector: 'app-dash-board-home',
  standalone: true,  // Use standalone: true if this component is standalone
  imports: [CommonModule, FormsModule], // Only include Angular modules here
  templateUrl: './dash-board-home.component.html',
  styleUrls: ['./dash-board-home.component.css'], // Corrected to `styleUrls`
})
export class DashBoardHomeComponent  {



}
