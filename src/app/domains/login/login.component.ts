import { Component, inject, signal } from '@angular/core';
import { Router, RouterLinkWithHref } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { UserService } from '../../services/user.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLinkWithHref,
    HeaderComponent,
    FooterComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private router = inject(Router);
  private userService = inject(UserService);
  private authService = inject(AuthService);

  loginForm = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required],
    }),
    password: new FormControl('', {
      validators: [Validators.required],
    }),
  });

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  formInvalid = false

  OnSubmit() {
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value as User).subscribe({
        next: (response: any) => {
          if (response.token) {
            this.authService.setToken(response.token);
            this.router.navigate(['']);
          } else {
            this.formInvalid = true
          }
        },
        error: (error) => {
          console.log(error);
        },
      });
    } else {
      alert('Campos incompletos');
    }
  }
}
