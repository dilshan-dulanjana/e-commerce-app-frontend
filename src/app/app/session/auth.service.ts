import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  logout() {
    // Add your logout logic here
    localStorage.removeItem('authToken');
    console.log('Logged out successfully');
  }
}
