import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProduitComponent } from './components/produit/produit.component';
import { CategorieComponent } from './components/categorie/categorie.component';
import { AdminComponent } from './components/admin/admin.component';
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


//ctrl espace l improtation
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "cart", component: CartComponent },
  { path: "produit", component: ProduitComponent },
  { path: "categorie/:id", component: CategorieComponent },
  { path: "admin", component: AdminComponent },
  { path: "addpro", component: AddproComponent },
  { path: "listpro", component: ListproComponent },
  { path: "listcat", component: ListcatComponent },
  { path: "listcon", component: ListcontactComponent },
  { path: "listuser", component: ListuserComponent },
  { path: "update/:id", component: UpproComponent },
  { path: "upcat/:id", component: UpcatComponent },
  { path: "addcat", component: AddcatComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  // t3ayet les route eli sta3melthom 
}
