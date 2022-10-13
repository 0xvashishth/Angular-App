import { Component, Input, OnInit } from '@angular/core';
import { ListService } from './list.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public lists!:any;
  public gif:string = "https://user-images.githubusercontent.com/76911582/190166775-b792861c-f01f-4a69-b406-e08a0adf0fd0.gif";
  @Input('parentData') public parentData: any;
  private _name!: string;
  constructor(public listService:ListService) { }
  @Input()
  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }

  get name(): string { return this._name; }
  ngOnInit(): void {
    this.listService.getLists().subscribe((data) => {this.lists = data; this.gif = "";});

  }

}