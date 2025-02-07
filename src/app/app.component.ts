import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'first-project-app';
  users = DUMMY_USERS;
  selectedUserId?: string;
  nameSelected = '';

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
    // this.nameSelected = DUMMY_USERS.find((x) => x.id === id)?.name || '';
  }
}
