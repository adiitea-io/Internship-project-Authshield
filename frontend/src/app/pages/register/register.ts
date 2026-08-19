import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-register',
   standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    RouterLink
  ],
  
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  name = '';
  email = '';
  password = '';
  confirmPassword = '';
  
  constructor(private auth: Auth) { }
  register() {
     if (this.password !== this.confirmPassword) {
    console.error('Passwords do not match');
    return;
    }
    

    this.auth.register(this.name, this.email, this.password).subscribe({
      next: (response: any) => {
        console.log('Registration successful');
        console.log(response);
      },
      error: (error) => {
        console.error('Registration failed', error);
      }
    });
  }
  
 }
