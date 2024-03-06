import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './shared/components/dashbord/dashbord.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { UsersComponent } from './shared/components/users/users.component';
import { ProductComponent } from './shared/components/products/product/product.component';
import { EditeProductComponent } from './shared/components/products/edite-product/edite-product.component';
import { AuthGuard } from './shared/services/auth.guard';
import { LoginComponent } from './shared/components/login/login.component';
import { SingupComponent } from './shared/components/singup/singup.component';
import { UserComponent } from './shared/components/users/user/user.component';
import { UserEditComponent } from './shared/components/users/user-edit/user-edit.component';
import { UserResolver } from './shared/services/user.resolver';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: DashbordComponent },
  {
    path: 'products', component: ProductsComponent,
    canActivate: [AuthGuard],
    children: [
      { path: ':id', component: ProductComponent },
      { path: ':id/edit', component: EditeProductComponent },
    ]
  },
  {
    path: 'users', component: UsersComponent,
    children : [
      {path : ':id' , component : UserComponent ,
       resolve : { user : UserResolver}},
      {path : ':id/edit', component : UserEditComponent}
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'singUp', component: SingupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
