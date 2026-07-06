import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @Input() userName:string|undefined;
  @Output() selectedUser = new EventEmitter();
  @Output() deletedUser = new EventEmitter();

  handleSelectUser(name:string | undefined) {
    this.selectedUser.emit(name);
  }

  handleDeleteUser(name:string|undefined) {
    this.deletedUser.emit(name);
  }
}
