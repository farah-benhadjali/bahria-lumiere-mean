import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contact!: Contact;
  
  msgForm: FormGroup;
  loading = false;
  submitted = false;
  constructor(public formBuilder: FormBuilder, private cs: ContactService, 
    private router: Router, private http:HttpClient) {
    this.msgForm= this.formBuilder.group({
      Coname: ['', Validators.required],
      email: ['', Validators.required],
      sujet: ['',Validators.required],
      msg: ['', Validators.required]
      })
   }

  get f() { return this.msgForm.controls; }  
  ngOnInit(): void {
    
  }
  onSubmit() {
    console.log(this.msgForm.value);
    this.cs.postContacts(this.msgForm.value)
      .subscribe(
        async _ => { await this.router.navigate(['/']) },
        error => { console.log(error) }
      )
  }
  
  
}