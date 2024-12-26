import { Component } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterLink, RouterOutlet, RouterStateSnapshot } from '@angular/router';
import { SigINComponent } from '../sig-in/sig-in.component';
import { AuthService } from '../session/auth.service';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet,RouterLink,SigINComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements CanActivate {
  constructor(private router: Router,private authService: AuthService) {
    this.canActivate();
  }

  logout() {
    alert('Logging out...');
    this.authService.logout();
    this.router.navigate(['signIN']); // Redirect to login after logout
  }

  canActivate(): boolean {
    const token = localStorage.getItem('authToken');
    if (token) {
      return true; // Allow navigation if token exists
    } else {
      this.router.navigate(['signIN']); // Redirect to login if token doesn't exist
      return false;
    }
  }

}
