import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {
  
  public hello = "hii boy!!";
  public parastyle = "para";
  constructor() { }

  ngOnInit(): void {
  }

  public sayHello():string {

    return "Hello function"
    
  }

}
