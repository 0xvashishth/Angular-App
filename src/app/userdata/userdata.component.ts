import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {
  
  public usernamestyle:string = "username-text";
  public passwordstyle:string = "password-text";
  public submitbtn = {
    submitbtnstyle: true
  }
  constructor() { }

  ngOnInit(): void {
  }

  public onSave(username:any,password:any):void{
    console.log(username.value);
    console.log(password.value);
  }

  public onKeyUpUsername(username:any):void{
    if(username.value.length < 8){
      console.log("Not In Specofied Format!");
    }
  }

}
