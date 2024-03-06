import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  
  email: string = '';
  password: string = '';


  constructor(private authSerives : AuthService) { }

  ngOnInit(): void {
  }


  craeteAccount() {
    if( this.email == ''){
      alert ('enter valid mail')
      return
    }
    if(this.password == ''){
      alert('enter valid password')
      return
    }
    this.authSerives.createAccount(this.email , this.password)
  }


}
