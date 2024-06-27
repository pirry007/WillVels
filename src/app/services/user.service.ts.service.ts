import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);

  constructor() { }

  register(formValues: User){
    return this.http.post("http://localhost:3000/api/auth/register",
      {
        firstname: formValues.firstname,
        lastname: formValues.lastname,
        email: formValues.email,
        password: formValues.password
      }
    )
    
  }

  login(formValues: any){
    return this.http.post("http://localhost:3000/api/auth/login",
      {
        emai: formValues.emai,
        password: formValues.password
      }
    )
  }

  islogged(){
    if(localStorage.getItem("user_token")){
      return true;
    } else {
      return false;
    }
  }
}
