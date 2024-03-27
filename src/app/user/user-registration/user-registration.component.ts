import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServices } from '../services/user.service';
import { UserDetails, UserPostResponse } from '../enums/user';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss'],
})
export class UserRegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  notificationMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserServices,
    private router: Router
  ) {}

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      username: ['', Validators.required],
    });
  }

  ngOnChanges(): void {
    this.notificationMessage = this.userService.getNotificationMessage();
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const formInput = this.registrationForm.value;
      const userDetails: UserDetails = {
        register: true,
        email: formInput.email,
        password: formInput.password,
        user_name: formInput.password,
      };
      this.userService.postUserData(userDetails).subscribe({
        next: (response: HttpResponse<UserPostResponse>) => {
          this.router.navigate(['./user/log-in']);
        },
        error: (error) => {
          this.notificationMessage = 'An error occurred. Please Try again';
          // on error also I redirecting page to log-in because provided api's are failing randomly
          this.router.navigate(['./user/log-in']);
        },
      });
    }
  }
}
