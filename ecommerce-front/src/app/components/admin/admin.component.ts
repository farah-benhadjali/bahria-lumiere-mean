import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private as : AuthService) { }

  ngOnInit(): void {
  }
  async logOut() {
    if (confirm("Do you want to log out?")) {
      await this.as.logoutUser()
    }
  }
}
