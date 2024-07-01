import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { User } from '../../models/user.model';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLinkWithHref } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterLinkWithHref,
    ReactiveFormsModule,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  private userService = inject(UserService);
  private router = inject(Router);

  updateForm = new FormGroup({
    firstname: new FormControl('', {
      validators: [Validators.required],
    }),
    lastname: new FormControl('', {
      validators: [Validators.required],
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(5)],
    }),
  });

  get firstname() {
    return this.updateForm.get('firstname');
  }
  get lastname() {
    return this.updateForm.get('lastname');
  }
  get email() {
    return this.updateForm.get('email');
  }
  get password() {
    return this.updateForm.get('password');
  }

  

  onSubmit(event: Event) {
    if (this.updateForm.valid) {
      console.log('si se envia crack');
      this.userService.updateUser(this.updateForm.value as User).subscribe({
        next: (response) => {
          this.router.navigate(['']);
          alert('Cambios aplicados');
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
