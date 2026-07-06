import { Component, signal, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkWithHref, RouterLinkActive } from '@angular/router';
import { EventHandling } from "./event-handling/event-handling";
import { PropertyBinding } from "./property-binding/property-binding";
import { Signals } from './signals/signals';
import { ControlFlow } from './control-flow/control-flow';
import { TwoWayBinding } from './two-way-binding/two-way-binding';
import { GetterSetter } from './getter-setter/getter-setter';
import { ToDoListSignal } from './to-do-list-signal/to-do-list-signal';
import { CommonModule } from '@angular/common';
import { StructureDirective } from "./structure-directive/structure-directive";
import { Child } from './child/child';
import { Parent } from "./parent/parent";
import { DisplayCounter } from "./global-data-share/display-counter/display-counter";
import { ControlCounter } from "./global-data-share/control-counter/control-counter";
import { BuiltInPipe } from './pipe/built-in-pipe/built-in-pipe';
import { PipeTesting } from "./pipe/custome-pipe/pipe-testing/pipe-testing";
import { Header } from './components/header/header';
import { DynamicComponent } from "./dynamic-component/dynamic-component";
import { ReactiveForm } from "./reactive-form/reactive-form";
import { FormGrouping } from "./form-grouping/form-grouping";
import { FormSignal } from "./form-signal/form-signal";
import { TemplateForm } from "./template-form/template-form";
import { Products } from "./components/products/products";
import { UserList } from './components/user-list/user-list';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    EventHandling,
    PropertyBinding,
    Signals, ControlFlow,
    TwoWayBinding,
    GetterSetter,
    ToDoListSignal,
    StructureDirective,
    Child,
    Parent,
    DisplayCounter,
    ControlCounter,
    BuiltInPipe,
    PipeTesting,
    RouterOutlet,
    Header,
    RouterLinkWithHref,
    RouterLinkActive,
    DynamicComponent,
    ReactiveForm,
    FormGrouping,
    FormSignal,
    TemplateForm,
    Products,
    UserList
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
