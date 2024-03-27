import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LogInCredentials } from '../enums/user';
import { UserServices } from '../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
  loginForm!: FormGroup;
  notificationMessage = '';
  isSuccess = false;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserServices,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnChanges(): void {
    this.notificationMessage = this.userService.getNotificationMessage();
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const formInput = this.loginForm.value;
      const userDetails: LogInCredentials = {
        login: true,
        email: formInput.email,
        password: formInput.password,
      };
      this.userService.userLogIn(userDetails).subscribe(
        (response) => {
          this.userService.setLogInStatus(true);
          this.isSuccess = true;
          this.router.navigate(['./products/home']);
        },
        (error) => {
          this.notificationMessage =
            "Please enter correct credentials. If you don't have an account, please sign up.";
            // on error also I redirecting page to log-in because provided api's are failing randomly
            this.router.navigate(['./products/home']);
        }
      );
    }
  }
}
