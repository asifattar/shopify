import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { iusers } from 'src/app/shared/interface/iuser';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {



  selectedUser !: iusers
  userId !: number

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private router: Router) {
      this.route.data.subscribe((res)=> {
        console.log(res , 'resolver');
        this.selectedUser = res['user']
        
      })
  }

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.userId = +param['id']

      this.selectedUser = this.userService.getSelectedUser(this.userId)!

      console.log(this.selectedUser);

    })
  }


  gotoEdit() {
    this.router.navigate(['/users', this.userId, 'edit'], { queryParamsHandling: 'preserve' })
  }


  delete() {
    this.userService.deleteUser(this.userId);
    this.router.navigate(['/home'])
  }
}
