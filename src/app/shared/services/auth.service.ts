import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
// import { AngularFireAuth } from '@angular/fire/compat/auth'



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoginStatus : boolean = false;
  constructor(private fireauth : AngularFireAuth , private router : Router) { }

  // isAuthenticate(): Promise<boolean> { 
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(this.isLoginStatus = true)
  //     }, 1000);
  //     reject(this.isLoginStatus = false)

  //   })

  // }
//   isAuthenticate(): Promise<boolean> {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
           
//             resolve(this.isLoginStatus = true); // Resolve with true after 1 second

//         }, 1000);
     

//     });
// }

isAuthenticated(): Promise<boolean> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
     if(this.isLoginStatus){
      resolve(true)
     }else{
      reject(false)
     }
    }, 1000);
  });
}


  getLogInStatus() {
    return this.isLoginStatus
  }

  logIn(email : string , pass : string) {
  this.fireauth.signInWithEmailAndPassword(email , pass).then(()=>  {
    localStorage.setItem('token' , 'true')
    this.isLoginStatus = true
    this.router.navigate(['/products'])
  }),  (_err: any) => {
        alert('somthing went wrong')
        this.router.navigate(['/'])
      }
  
  //  return this.isLoginStatus = true
    // alert('login')
  }


  createAccount(email : string, pass : string ){
    this.fireauth.createUserWithEmailAndPassword(email , pass).then(() => {
      alert('account created successfull');
      this.router.navigate(['login'])
    })
  }




  logOut() {
    this.fireauth.signOut().then(()=> {
      localStorage.removeItem('token') ;
      this.isLoginStatus = false ;
      this.router.navigate(['login'])
    })
  }




}
