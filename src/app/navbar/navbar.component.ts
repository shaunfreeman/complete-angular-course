import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  collapsed = true;

  constructor(
    private router: Router,
    private authService: AuthService) { }

  get auth() {
    return this.authService;
  }

  logout() {
    this.authService.logout();
    return this.router.navigate(['/auth/login']);
  }
}
