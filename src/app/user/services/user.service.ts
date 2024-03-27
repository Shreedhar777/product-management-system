import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import {
  LogInCredentials,
  LogInResponse,
  UserDetails,
  UserPostResponse,
} from '../enums/user';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserServices {
  login = false;
  notificationMessage = new BehaviorSubject('');
  baseUrl = `${environment.target}/${environment.apiVersion}/user/index.php`;

  constructor(private httpClient: HttpClient) {}

  postUserData(user: UserDetails): Observable<HttpResponse<UserPostResponse>> {
    return this.httpClient.post<UserPostResponse>(this.baseUrl, user, {
      observe: 'response',
    });
  }

  userLogIn(logDetails: LogInCredentials): Observable<LogInResponse> {
    return this.httpClient.post<LogInResponse>(this.baseUrl, logDetails);
  }

  setLogInStatus(flag: boolean): void {
    this.login = flag;
  }

  getLogInStatus(): boolean {
    return this.login;
  }

  setNotificationMessage(message: string): void {
    this.notificationMessage.next(message);
  }

  getNotificationMessage(): string {
    return this.notificationMessage.value;
  }
}
