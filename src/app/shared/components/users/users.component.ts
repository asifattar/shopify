import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { iusers } from '../../interface/iuser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usersData : iusers[] = []
  selectedUser  !: number  


  constructor(private userService : UsersService ) { }

  ngOnInit(): void {
    this.usersData = this.userService.getUserArr()
    this.selectedUser = this.usersData[0].id

  }

}
