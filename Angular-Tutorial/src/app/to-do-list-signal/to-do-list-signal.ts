import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-to-do-list-signal',
  imports: [],
  templateUrl: './to-do-list-signal.html',
  styleUrl: './to-do-list-signal.css',
})
export class ToDoListSignal {
  tasks = signal([
    { id: 0, title: "Hello Wrold", completed: false }
  ])
  task = signal('');

  handleAddTask() {
    if (this.task()) {
      this.tasks.update((prev) => (
        [...prev, { id: this.tasks().length, title: this.task(), completed: false }]
      ))
      this.task.set('');
    }
  }

  handleDelete(id: number) {
    this.tasks.update((tasks) => tasks.filter((task) => task.id != id))
  }
}
