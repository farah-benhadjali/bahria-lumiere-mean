import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { ProduitComponent } from './components/produit/produit.component';
import { CategorieComponent } from './components/categorie/categorie.component';
import { CartComponent } from './components/cart/cart.component';
import { AdminComponent } from './components/admin/admin.component';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/home/footer/footer.component';
import { NavbarComponent } from './components/home/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddproComponent } from './components/addpro/addpro.component';
import { ListproComponent } from './components/listpro/listpro.component';
import { ListcontactComponent } from './components/listcontact/listcontact.component';
import { ListcatComponent } from './components/listcat/listcat.component';
import { ListuserComponent } from './components/listuser/listuser.component';
import { AddcatComponent } from './components/addcat/addcat.component';
import { UpproComponent } from './components/uppro/uppro.component';
import { UpcatComponent } from './components/upcat/upcat.component';
import { NavbaradminComponent } from './components/admin/navbaradmin/navbaradmin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProduitComponent,
    CategorieComponent,
    CartComponent,
    AdminComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    AddproComponent,
    ListproComponent,
    ListcontactComponent,
    ListcatComponent,
    ListuserComponent,
    AddcatComponent,
    UpproComponent,
    UpcatComponent,
    NavbaradminComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
