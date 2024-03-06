import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashbordComponent } from './shared/components/dashbord/dashbord.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { UsersComponent } from './shared/components/users/users.component';
import { LoginComponent } from './shared/components/login/login.component';
import { SingupComponent } from './shared/components/singup/singup.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ProductComponent } from './shared/components/products/product/product.component';
import { EditeProductComponent } from './shared/components/products/edite-product/edite-product.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { UserComponent } from './shared/components/users/user/user.component';
import { UserEditComponent } from './shared/components/users/user-edit/user-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    ProductsComponent,
    UsersComponent,
    LoginComponent,
    SingupComponent,
    NavbarComponent,
    FooterComponent,
    ProductComponent,
    EditeProductComponent,
    UserComponent,
    UserEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
