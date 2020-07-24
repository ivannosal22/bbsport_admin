import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  ModalVisible: boolean = false;
  userTable = [
    { name: 'User One', role: 'Admin', created: Date.now() },
    { name: 'User Two', role: 'Ground Manager', created: Date.now() },
    { name: 'User Three', role: 'End User', created: Date.now() },
  ];

  constructor() { }

  ngOnInit() {
  }


  showModal() {
    this.ModalVisible = true;
  }

  handleCancel() {
    this.ModalVisible = false;
  }

}
