import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



  email: string = '';
  password: string = '';

  constructor(private authServies: AuthService , private router : Router) { }

  ngOnInit(): void {
  }



  singIn() {
    if (this.email == '') {
      alert('enter valid mail');
      return
    }
    else if (this.password == '') {
      alert('enter valid password')
      return
    }
    this.authServies.logIn(this.email, this.password)
  }



  singUp() {
   this.router.navigate(['singUp'])
    }

}
