import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {
  
  public usernamestyle:string = "username-text";
  public passwordstyle:string = "password-text";
  public errorstyle:string = "errorstyle-text"
  public errorusername:string = "";
  public usernameDisplay:string = "";
  public birthday : Date = new Date();
  public users:any[] = [];
  public submitbtn = {
    submitbtnstyle: true
  }
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService = new UserService();
    this.userService.setuserPassword("pass");
    this.userService.setusername("user1");
    console.log(this.userService.getDetails());
  }

  public onSave(username:any,password:any):void{
    if(username.value.length < 8){
      this.errorusername = "Username must be 8 character long!";
    }else{
      this.errorusername = "";
    }
    console.log(username.value);
    console.log(password.value);
  }

  public onKeyUpUsername(username:any,event:any):void{
    console.log("This is keyup event");
    console.log(event.type);
    console.log(event.target.value);
  }

}
