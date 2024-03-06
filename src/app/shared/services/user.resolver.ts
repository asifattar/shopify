import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { iusers } from '../interface/iuser';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<iusers> {


  constructor(private userServices : UsersService){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):iusers | Observable<iusers> | Promise<iusers> {
    let getId =  +route.params['id'];
     return this.userServices.getSelectedUser(getId)
  }
}
