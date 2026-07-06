import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-dynamic-component',
  imports: [],
  templateUrl: './dynamic-component.html',
  styleUrl: './dynamic-component.css',
})
export class DynamicComponent {
  @ViewChild("container", { read: ViewContainerRef })
  container!: ViewContainerRef

  async handleUserDetails() {
    this.container.clear();
    const {Home} = await import('../pages/home/home')
    this.container.createComponent(Home);
  }
}
