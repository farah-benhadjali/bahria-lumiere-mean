import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  users: User[] = [];
  
  constructor(private us:UserService ,private as:AuthService) { }

  ngOnInit(): void {
    this.listUsers();
  }
  listUsers() {
    this.us.getUsers().subscribe(
      (data) => {
        this.users = data;
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  };
  
  async logOut() {
    if (confirm("Do you want to log out?")) {
      await this.as.logoutUser()
    }
  };

  deleteUser(_id:String)
  {
   this.us.deleteUsers(_id).subscribe(() => {
       alert("User supprimé");
  });
  }
  refresh(): void {
    window.location.reload();
  }
}
