import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user!: User;
  
  
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  emailPattern = "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$";
  constructor(public formBuilder: FormBuilder, private authService: AuthService, 
    private router: Router) {
    this.registerForm= this.formBuilder.group({
      fname: ['', [Validators.required, Validators.pattern("^[A-Za-z]+([\\ A-Za-z]+)*")]],
      lname: ['',[Validators.required, Validators.pattern("^[A-Za-z]+([\\ A-Za-z]+)*")]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, Validators.minLength(8),Validators.maxLength(15)]]
      })
   }

  get f() { return this.registerForm.controls; }  
  ngOnInit(): void {
    
  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
    }
  
    this.authService.signup(this.registerForm.value)        
    .subscribe(
      res => {             
        localStorage.setItem('token', res.token);    
        this.router.navigate(['/login']);
      },
      err => {
        console.log(err);
        this.submitted = false;
      }
    )

  }
}