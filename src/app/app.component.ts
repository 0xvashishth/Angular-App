import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public user_list : string[] = [];
  constructor (private userService: UserService){

  }
  title = 'myapp';
  ngOnInit(){
    this.user_list = this.userService.getUserList();
  }
}
