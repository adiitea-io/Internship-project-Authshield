import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../services/auth';
import {  Router, RouterLink } from '@angular/router';

import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    RouterLink,
    MessageModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email = '';
  password = '';
  loginError = '';

  constructor(private auth: Auth, private router: Router) { }
  
  login() {
    this.auth.login(this.email, this.password).subscribe({
      next: (response: any) => {
        localStorage.setItem('token', response.token)
        console.log('Login successful');

        this.router.navigate(['/dashboard']);
    },
    error: (error) => {
      
      this.loginError = 'Invalid email or password';
    }
        
    })
  }
}