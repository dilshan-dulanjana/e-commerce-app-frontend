import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Admin } from '../model/Admin';
import { HttpClient } from '@angular/common/http';
import { Admin_Profile } from '../model/Admin_Profile';
import axios from 'axios';

@Component({
  selector: 'app-dash-profile',
  imports: [CommonModule, FormsModule],
  templateUrl: './dash-profile.component.html',
  styleUrl: './dash-profile.component.css'
})
export class DashProfileComponent implements OnInit {

  

  constructor(private http: HttpClient) { }

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
      this.admin.image_url = response.data.secure_url;
      this.isButtonDisabled = false;
      // Save the image URL to the database

    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image. Please try again.');
    }
  }

  cards:any;

  ngOnInit(): void {
    this.getAdminByID();
  }

  public admin: Admin_Profile = new Admin_Profile(0, "", "", "", "", "", "", "");


  getAdminByID(){
    this.http.get(`http://localhost:8080/get-admin/${1}`).subscribe(res=>{
      console.log(res);
      this.cards=res;
    })
  }



  updateAdmin() {
    this.admin.category = "admin";
    console.log(this.admin);
    this.http.post("http://localhost:8080/add-admin", this.admin).subscribe(res => {
      alert("profile updated successfully!");
      console.log(res);
      this.admin = new Admin_Profile(0, "", "", "", "", "", "", "");
    })
  }
}
