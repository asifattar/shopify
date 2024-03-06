import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private authservice : AuthService , private router : Router) { }

  ngOnInit(): void {
  }
  
  logIn() {
    // this.authservice.logIn()
    this.router.navigate(['/login'])
  }
  logOut() {
    this.authservice.logOut()
    this.router.navigate([''])

  }

}
