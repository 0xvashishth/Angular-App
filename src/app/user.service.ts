import { Injectable } from '@angular/core';

@Injectable({
providedIn: 'root'
})
export class UserService {
public user_list : string[] = ['Rajesh', 'Mahesh', 'Pritesh', 'Kalpesh']
constructor() { }
getUserList() : string[] {
return this.user_list;
}
}