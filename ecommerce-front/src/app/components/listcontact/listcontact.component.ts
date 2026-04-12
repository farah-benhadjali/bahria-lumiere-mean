import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { AuthService } from 'src/app/services/auth.service';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-listcontact',
  templateUrl: './listcontact.component.html',
  styleUrls: ['./listcontact.component.css']
})
export class ListcontactComponent implements OnInit {

  contacts: Contact[] = [];
  
  constructor(private cs:ContactService,private as:AuthService) { }

  ngOnInit(): void {
    this.listContacts();
  }
  listContacts() {
    this.cs.getContacts().subscribe(
      (data) => {
        this.contacts = data;
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
  }
  deletecontact(_id:String)
   {
     this.cs.deleteContacts(_id).subscribe(() => {
       alert("reclamation supprimé");
      });
   };
   refresh(): void {
    window.location.reload();
   }
};


