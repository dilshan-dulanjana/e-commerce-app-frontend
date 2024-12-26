import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  logout() {
    localStorage.removeItem('authToken');
    console.log('Logged out successfully');
  }
}
