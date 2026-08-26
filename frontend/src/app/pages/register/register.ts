import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
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
  emailError = '';
  password = '';
  confirmPassword = '';
  passwordPattern =
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$';
  passwordChanged() {
    this.cdRef.detectChanges();
  }

  hasMinLength(): boolean {
    return this.password.length >= 8;
  }

  hasUppercase(): boolean {
    return /[A-Z]/.test(this.password);
  }

  hasLowercase(): boolean {
    return /[a-z]/.test(this.password);
  }

  hasNumber(): boolean {
    return /\d/.test(this.password);
  }

  hasSpecialCharacter(): boolean {
    return /[@$!%*?&]/.test(this.password);
  }

  constructor(private auth: Auth, private cdRef: ChangeDetectorRef, private router: Router) { }
  register(form: NgForm) {
    if (form.invalid) {
      console.error('invalid submission');
      return;
    }

    if (this.password !== this.confirmPassword) {
      console.error('Passwords do not match');
      return;
    }


    this.auth.register(this.name, this.email, this.password).subscribe({
      next: (response: any) => {
        console.log('Registration successful');
        console.log(response);
        this.router.navigate(['/dashboard']);

      },
      error: (error) => {

        if (error.status === 409) {
          this.emailError = 'This email is already registered.';
          this.cdRef.detectChanges();
          return;
        }
        console.error('Registration failed', error);
      }
    });
  }

}
