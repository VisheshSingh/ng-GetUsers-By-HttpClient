import { Component, OnInit } from "@angular/core";
import { User } from "../../models/User";
import { UserService } from "../../user.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(private us: UserService) {}

  ngOnInit() {
    this.us.getUsers().subscribe(user => {
      //console.log(user);
      this.users = user;
    });
  }
}
