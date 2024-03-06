import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { iusers } from 'src/app/shared/interface/iuser';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  usersobj !: iusers;
  canEdite !: string;
  userId !: number;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UsersService) { }

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.userId = +param['id'];
      console.log(this.userId);
      this.usersobj = this.userService.getSelectedUser(this.userId);
      console.log(this.usersobj);
    })

  }

  onSubmite() {
    let updataInfo: iusers = {
      firstName: this.usersobj.firstName,
      lastName: this.usersobj.lastName,
      surname: this.usersobj.surname,
      dateOfBirth: this.usersobj.dateOfBirth,
      userRole: this.usersobj.userRole,
      nativePlace: this.usersobj.nativePlace,
      id: this.usersobj.id
    }
    this.userService.updateUser(updataInfo);
    this.router.navigate(['/users', this.userId]);
  }

}
