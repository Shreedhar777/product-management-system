export interface UserDetails {
  register: boolean;
  email: string;
  password: string;
  user_name: string;
}

export interface UserPostResponse {
  status: string;
  message: string;
}

export interface LogInCredentials {
  login: true;
  email: string;
  password: string;
}

export interface LogInResponse {
  status: string;
  message: string;
  data: {
    user_id: number;
    email: string;
    user_name: string;
  };
}
