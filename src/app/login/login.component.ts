import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  role: string = 'admin';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.username && this.password) {
   
      if (this.role === 'admin') {
        this.router.navigate(['/admin-dashboard']);
      } else if (this.role === 'doctor') {
        this.router.navigate(['/doctor-dashboard']);
      } else if (this.role === 'patient') {
        this.router.navigate(['/landing']);
      }
    } else {
      alert('Please fill out all fields.');
    }
  }
}
