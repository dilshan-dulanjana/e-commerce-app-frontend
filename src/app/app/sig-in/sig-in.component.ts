import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { SignJWT, jwtVerify, JWTPayload } from 'jose';

@Component({
  selector: 'app-sig-in',
  standalone: true, // Ensure standalone component declaration
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './sig-in.component.html',
  styleUrls: ['./sig-in.component.css'], // Fix typo from `styleUrl` to `styleUrls`
})
export class SigINComponent {
  email: string = ''; // Login email
  username: string = ''; // Login username
  password: string = ''; // Login password
  togglebutton:boolean=false;


  private secretKey = new TextEncoder().encode('your-secret-key'); // Replace with a secure key

  constructor(private http: HttpClient, private router: Router) {}

  // Generate JWT
  async generateToken(): Promise<string> {
    const payload: JWTPayload = { username: this.username, email: this.email };
    return await new SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('2h') // Token expiration
      .sign(this.secretKey);
  }

  // Save JWT locally
  private saveToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  // Login handler




  async login(username:String,pasword:String): Promise<void> {

    console.log("cjeck");

    switch(this.togglebutton){

      case true:
        this.http
        .get<object>(
          `http://localhost:8080/checkLoging/${username}/${pasword}`
        )
        .subscribe({
          next: async (res) => {
            if (res) {
              alert('Login Successful!');
              const token = await this.generateToken();
              this.saveToken(token);
              this.router.navigate(['home']);
            } 
              alert('Invalid Username or Password!');
            
          },
          error: (err) => {
            console.error('Login error:', err);
            alert('An error occurred while logging in.');
          },
        });

        break;

        case false:
          this.http
          .get<object>(
            `http://localhost:8080/checkLoging/${username}/${pasword}`
          )
          .subscribe({
            next: async (res) => {
              if (res) {
                alert('Login Successful!');
                const token = await this.generateToken();
                this.saveToken(token);
                this.router.navigate(['dashboard']);
              } 
                alert('Invalid Username or Password!');
              
            },
            error: (err) => {
              console.error('Login error:', err);
              alert('An error occurred while logging in.');
            },
          });


    }
  

    } 

    onToggle(): void {
      this.togglebutton=true;
     
    }
  }

