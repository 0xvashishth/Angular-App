import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userName:string = "";
  private userPassword:string ="";
  hello!: string;

  constructor() { }

  setusername(userName:string):void{
    this.userName = userName;
  }
  setuserPassword(userPassword:string):void{
    this.userPassword = userPassword;
  }

  getDetails(): string[]{
    console.log("This is data from getDetails");
    return [this.userName,this.userPassword];
  }
}
