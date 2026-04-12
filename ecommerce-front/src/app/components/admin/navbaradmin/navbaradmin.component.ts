import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbaradmin',
  templateUrl: './navbaradmin.component.html',
  styleUrls: ['./navbaradmin.component.css']
})
export class NavbaradminComponent implements OnInit {

  constructor(private as:AuthService) { }

  ngOnInit(): void {
  }
  async logOut() {
    if (confirm("Do you want to log out?")) {
      await this.as.logoutUser()
    }
  }
}
