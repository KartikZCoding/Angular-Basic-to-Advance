# 🅰️ Angular — From Scratch to Advanced

> A complete, hands-on Angular learning journey — built topic by topic from absolute zero to real-world API integration, styling with Tailwind CSS & Material UI, and production builds.

**Angular Version Used:** 21 &nbsp;|&nbsp; **TypeScript:** ~5.9 &nbsp;|&nbsp; **Node.js Required**

---

## 📑 Table of Contents

### 🟢 Phase 1 — Foundation & Setup

| # | Topic | Category |
|---|-------|----------|
| 1 | [What is Angular?](#1-what-is-angular) | Foundation |
| 2 | [Why Angular?](#2-why-angular) | Foundation |
| 3 | [Important Points Before Starting](#3-important-points-before-starting) | Foundation |
| 4 | [Setting Up an Angular Project](#4-setting-up-an-angular-project) | Setup |
| 5 | [Angular File & Folder Structure](#5-angular-file--folder-structure) | Setup |
| 6 | [Angular CLI](#6-angular-cli) | Tooling |

### 🔵 Phase 2 — Core Concepts & TypeScript Basics

| # | Topic | Category |
|---|-------|----------|
| 7 | [Components in Angular](#7-components-in-angular) | Core Concepts |
| 8 | [Creating a Component Without CLI](#8-creating-a-component-without-cli) | Components |
| 9 | [Inline Component](#9-inline-component) | Components |
| 10 | [Data Types in Angular (TypeScript)](#10-data-types-in-angular-typescript) | TypeScript |

### 🟡 Phase 3 — Data Binding & Events

| # | Topic | Category |
|---|-------|----------|
| 11 | [Interpolation](#11-interpolation) | Data Binding |
| 12 | [Property Binding](#12-property-binding) | Data Binding |
| 13 | [Event Binding (Click Event)](#13-event-binding--click-event) | Data Binding |
| 14 | [Important Events in Angular](#14-important-events-in-angular) | Data Binding |
| 15 | [Two-Way Data Binding](#15-two-way-data-binding) | Data Binding |

### 🟣 Phase 4 — Signals & Reactivity

| # | Topic | Category |
|---|-------|----------|
| 16 | [Signals](#16-signals) | Reactivity |
| 17 | [Computed Signals](#17-computed-signals) | Reactivity |
| 18 | [Effect in Angular](#18-effect-in-angular) | Reactivity |
| 19 | [Data Types with Signals](#19-data-types-with-signals) | Reactivity |
| 20 | [Get & Set Value with Input Field](#20-get--set-value-with-input-field) | Reactivity |
| 21 | [Getter & Setter for Signals](#21-getter--setter-for-signals) | Reactivity |

### 🟠 Phase 5 — Template Logic & Directives

| # | Topic | Category |
|---|-------|----------|
| 22 | [Control Flow Statements](#22-control-flow-statements) | Template Syntax |
| 23 | [Directives](#23-directives) | Core Concepts |

### 🎨 Phase 6 — Styling

| # | Topic | Category |
|---|-------|----------|
| 24 | [Styling Options & Rules](#24-styling-options--rules) | Styling |

### 🔗 Phase 7 — Component Communication & State

| # | Topic | Category |
|---|-------|----------|
| 25 | [Pass Data: Parent → Child (@Input)](#25-pass-data-parent--child-input) | Communication |
| 26 | [Pass Data: Child → Parent (@Output)](#26-pass-data-child--parent-output) | Communication |
| 27 | [Global State with Signals](#27-global-state-with-signals) | State Management |

### 🛠️ Phase 8 — Mini Project

| # | Topic | Category |
|---|-------|----------|
| 28 | [To-Do List Component (Mini Project)](#28-to-do-list-component-mini-project) | Practice |

### 🔄 Phase 9 — Pipes (Data Transformation)

| # | Topic | Category |
|---|-------|----------|
| 29 | [Pipes in Angular](#29-pipes-in-angular) | Data Transform |
| 30 | [Custom Pipes](#30-custom-pipes) | Data Transform |

### 📝 Phase 10 — Forms

| # | Topic | Category |
|---|-------|----------|
| 31 | [Forms in Angular](#31-forms-in-angular) | Forms |
| 32 | [Reactive Forms (FormControl)](#32-reactive-forms-formcontrol) | Forms |
| 33 | [Form Grouping (FormGroup)](#33-form-grouping-formgroup) | Forms |
| 34 | [Reactive Forms Validation](#34-reactive-forms-validation) | Forms |
| 35 | [Template-Driven Forms](#35-template-driven-forms) | Forms |

### 🧭 Phase 11 — Routing & Navigation

| # | Topic | Category |
|---|-------|----------|
| 36 | [Routing in Angular](#36-routing-in-angular) | Navigation |
| 37 | [Header Component with Router](#37-header-component-with-router) | Navigation |
| 38 | [404 Page & Redirection](#38-404-page--redirection) | Navigation |
| 39 | [Query Params](#39-query-params) | Navigation |
| 40 | [Route Params](#40-route-params) | Navigation |
| 41 | [Dynamic Routing](#41-dynamic-routing) | Navigation |
| 42 | [Nested / Child Routing](#42-nested--child-routing) | Navigation |
| 43 | [Lazy Loading with Routing](#43-lazy-loading-with-routing) | Performance |
| 44 | [Load Component Dynamically](#44-load-component-dynamically) | Advanced |

### 🌐 Phase 12 — Services & API Integration

| # | Topic | Category |
|---|-------|----------|
| 45 | [Services in Angular](#45-services-in-angular) | Architecture |
| 46 | [API Integration (HttpClient)](#46-api-integration-httpclient) | HTTP |
| 47 | [Define Interface for API](#47-define-interface-for-api) | TypeScript |
| 48 | [Dynamic Routing with API](#48-dynamic-routing-with-api) | HTTP |
| 49 | [JSON Server API](#49-json-server-api) | Backend |
| 50 | [Integrate JSON Server Users API (GET)](#50-integrate-json-server-users-api-get) | HTTP |
| 51 | [POST API in Angular](#51-post-api-in-angular) | HTTP |
| 52 | [DELETE API in Angular](#52-delete-api-in-angular) | HTTP |
| 53 | [Populate Form Data Using API (GET by ID)](#53-populate-form-data-using-api-get-by-id) | HTTP |
| 54 | [Update Data Using PUT API](#54-update-data-using-put-api) | HTTP |

### 🎯 Phase 13 — Styling Libraries & Deployment

| # | Topic | Category |
|---|-------|----------|
| 55 | [Tailwind CSS in Angular](#55-tailwind-css-in-angular) | Styling |
| 56 | [Material UI in Angular](#56-material-ui-in-angular) | Styling |
| 57 | [Angular Production Build](#57-angular-production-build) | Deployment |

---

## 🚀 Quick Start — Run This Project Locally

### Prerequisites

| Tool | Version |
|------|---------|
| Node.js | 18+ (LTS recommended) |
| npm | 9+ |
| Angular CLI | 21+ |

### Installation Steps

```bash
# 1. Clone this repository
git clone <your-repo-url>
cd Angular

# 2. Install Angular app dependencies
cd Angular-Tutorial
npm install

# 3. Start the Angular dev server
ng serve --open
# App opens at http://localhost:4200

# 4. (Optional) Start the JSON Server for API features
cd ../API
npm install
npx json-server db.json
# API runs at http://localhost:3000
```

---

## 📂 Project Folder Structure

```
Angular/
├── Angular-Tutorial/         # Main Angular application
│   ├── src/
│   │   ├── app/
│   │   │   ├── event-handling/       # Topic 13-14: Event binding
│   │   │   ├── property-binding/     # Topic 12   : Property binding
│   │   │   ├── signals/              # Topic 16-19: Signals, Computed, Effect
│   │   │   ├── control-flow/         # Topic 22   : @if, @for, @switch
│   │   │   ├── two-way-binding/      # Topic 15   : Two-way data binding
│   │   │   ├── getter-setter/        # Topic 21   : Getter/setter for signals
│   │   │   ├── to-do-list-signal/    # Topic 28   : Mini project (To-Do List)
│   │   │   ├── structure-directive/  # Topic 23   : ngIf, ngFor, ngSwitch
│   │   │   ├── parent/               # Topic 25   : @Input parent component
│   │   │   ├── child/                # Topic 26   : @Output child component
│   │   │   ├── global-data-share/    # Topic 27   : Global state management
│   │   │   │   ├── store/            #              Signal-based store
│   │   │   │   ├── display-counter/  #              Display component
│   │   │   │   └── control-counter/  #              Control component
│   │   │   ├── pipe/                 # Topic 29-30: Built-in & custom pipes
│   │   │   │   ├── built-in-pipe/    #              uppercase, date, currency
│   │   │   │   └── custome-pipe/     #              Custom trim & currency pipes
│   │   │   ├── pages/                # Topic 36-41: Routing pages
│   │   │   │   ├── home/             #              Home page with navigation
│   │   │   │   ├── about/            #              Query params demo
│   │   │   │   ├── contact/          #              Route params demo
│   │   │   │   ├── login/            #              Login page
│   │   │   │   ├── users/            #              Users list with service
│   │   │   │   ├── user-details/     #              Dynamic route detail page
│   │   │   │   └── page-not-found/   #              404 wildcard page
│   │   │   ├── nestedRouting/        # Topic 42-43: Child routes & lazy loading
│   │   │   ├── dynamic-component/    # Topic 44   : ViewContainerRef dynamic load
│   │   │   ├── reactive-form/        # Topic 32   : FormControl
│   │   │   ├── form-grouping/        # Topic 33-34: FormGroup with validation
│   │   │   ├── form-signal/          # Topic 34   : Signal-based forms (Angular 21)
│   │   │   ├── template-form/        # Topic 35   : Template-driven forms
│   │   │   ├── components/           # Topic 45-54: Services & API integration
│   │   │   │   ├── header/           #              Navigation header
│   │   │   │   ├── products/         #              Product list (external API)
│   │   │   │   ├── products-details/ #              Product detail (dynamic route)
│   │   │   │   ├── user-list/        #              CRUD: User list (JSON Server)
│   │   │   │   ├── add-user/         #              CRUD: Add user (POST)
│   │   │   │   └── edit-user/        #              CRUD: Edit user (PUT)
│   │   │   ├── services/             #              All service files
│   │   │   ├── app.ts                #              Root component
│   │   │   ├── app.html              #              Root template
│   │   │   ├── app.routes.ts         #              Route configuration
│   │   │   └── app.config.ts         #              App-level configuration
│   │   ├── index.html                #              HTML entry point
│   │   ├── main.ts                   #              Bootstrap entry
│   │   └── styles.css                #              Global styles
│   ├── angular.json                  #              Angular workspace config
│   ├── package.json                  #              Dependencies & scripts
│   └── tsconfig.json                 #              TypeScript configuration
├── API/                              # JSON Server mock backend
│   ├── db.json                       #              Mock database (users)
│   └── package.json                  #              json-server dependency
├── Angular.txt                       #              Topics covered log
└── README.md                         #              📄 You are here!
```

---

# 🟢 PHASE 1 — Foundation & Setup

> _Before writing a single line of code, let's understand what Angular is, why it exists, and how to set it up._

---

## 1. What is Angular?

### What Is It?

Angular is a **TypeScript-based, open-source web application framework** developed and maintained by **Google**. It is used to build **Single Page Applications (SPAs)** — where the entire app loads once, and subsequent navigation happens dynamically without full page reloads.

### Why Does It Exist?

Before Angular, building large-scale web applications with vanilla JavaScript or jQuery was difficult:
- No structured architecture for organizing code.
- No built-in routing, dependency injection, or form handling.
- Maintaining and scaling code was a nightmare for large teams.

Angular was created to solve these problems by providing a **complete, opinionated framework** with everything built in — from templating and routing to HTTP handling and state management.

### Key Characteristics

| Feature | Description |
|---------|-------------|
| **SPA** | Single Page Application — only one HTML page is loaded; views are swapped dynamically |
| **TypeScript** | Built with TypeScript for type safety and better developer tooling |
| **Component-Based** | UI is broken into reusable, self-contained components |
| **Maintained by Google** | Long-term support and regular updates every 6 months |
| **MVC Architecture** | Follows Model-View-Controller pattern for clean separation of concerns |

### What If Angular Didn't Exist?

You would need to manually combine multiple libraries:
- **React** + **React Router** + **Redux** + **Axios** (or similar) to achieve what Angular provides out of the box.
- No single framework gives you routing, forms, HTTP, DI, and testing all integrated.

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 2. Why Angular?

### Why Choose Angular Over Other Frameworks?

| Reason | Explanation |
|--------|-------------|
| **Complete Web Framework** | Everything is built in — routing, forms, HTTP, animations, testing |
| **Fast Loading** | Ahead-of-Time (AOT) compilation, tree shaking, and lazy loading |
| **Fast Development** | Angular CLI generates boilerplate code instantly |
| **Suitable for Large Apps** | Dependency injection, modules, and strong typing help manage complexity |
| **Large Community** | Millions of developers, extensive documentation, and npm packages |
| **Regular Updates** | New major version every 6 months with backwards compatibility |

### When to Use Angular?

- ✅ Enterprise-level dashboards and admin panels
- ✅ Large-scale e-commerce applications
- ✅ Real-time applications (chat apps, collaborative tools)
- ✅ Progressive Web Apps (PWAs)
- ✅ Applications requiring strong type safety

### When NOT to Use Angular?

- ❌ Simple static websites (use plain HTML/CSS instead)
- ❌ Tiny single-feature widgets (React or vanilla JS might be lighter)
- ❌ Projects where bundle size is critical from day one (Angular has a larger initial bundle)

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 3. Important Points Before Starting

Before you write a single line of Angular code, understand these foundational requirements:

| Requirement | Details |
|-------------|---------|
| **Node.js** | Must be installed — Angular CLI runs on Node.js |
| **Code Editor** | VS Code is the most popular choice for Angular development |
| **MVC Pattern** | Angular uses the Model-View-Controller architecture internally |
| **AngularJS ≠ Angular** | AngularJS (v1.x) was JavaScript-based and is now deprecated. **Angular** (v2+) is a completely different, TypeScript-based framework |
| **Release Date** | Angular (v2) was released on **September 14, 2016** |
| **Current Version** | Angular 21 (as of this project) |

### AngularJS vs Angular — What Changed?

| Aspect | AngularJS (v1.x) | Angular (v2+) |
|--------|-------------------|---------------|
| Language | JavaScript | TypeScript |
| Architecture | MVC with $scope | Component-based |
| Mobile Support | Limited | Built-in (Progressive Web Apps) |
| Performance | Slower (dirty checking) | Faster (zone.js / signals) |
| CLI | None | Angular CLI for scaffolding |
| Status | ❌ Deprecated | ✅ Actively maintained |

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 4. Setting Up an Angular Project

### Prerequisites Installation

```bash
# Step 1: Install Node.js (download from https://nodejs.org)
node -v     # Verify Node.js installation
npm -v      # Verify npm installation

# Step 2: Install Angular CLI globally
npm install -g @angular/cli

# Step 3: Verify Angular CLI
ng version
```

### Create a New Project

```bash
# Create a new Angular application
ng new my-angular-app

# During creation, you'll be asked:
# ? Which stylesheet format? → CSS (or SCSS/SASS/LESS)
# ? Do you want to enable Server-Side Rendering? → No (for beginners)
```

### Run the Project

```bash
# Navigate into the project directory
cd my-angular-app

# Start the development server
ng serve

# Or open directly in browser
ng serve --open
# App runs at → http://localhost:4200
```

### What Happens Behind the Scenes?

1. `ng new` scaffolds the entire project with all config files, dependencies, and a starter component.
2. `ng serve` compiles the TypeScript, bundles the app using the Angular build system, and starts a live dev server with hot-module replacement.

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 5. Angular File & Folder Structure

When you create a new Angular project, these files and folders are generated:

### Root-Level Files

| File | Purpose |
|------|---------|
| `package.json` | Metadata + dependency list for the project |
| `package-lock.json` | Locks exact versions of all dependencies |
| `tsconfig.json` | Root TypeScript compiler configuration |
| `tsconfig.app.json` | TypeScript config specifically for the Angular app |
| `tsconfig.spec.json` | TypeScript config for unit test files |
| `angular.json` | Angular workspace configuration (build, serve, test options) |

### Root-Level Directories

| Directory | Purpose |
|-----------|---------|
| `node_modules/` | All installed dependency libraries |
| `public/` | Static assets (images, logos, icons) served as-is |
| `src/` | **Main source folder** — all your application code lives here |

### Inside `src/`

| Path | Purpose |
|------|---------|
| `index.html` | The single HTML file — entry point that loads in the browser first |
| `main.ts` | TypeScript entry point — bootstraps the Angular application |
| `styles.css` | Global CSS file applied to the entire application |
| `app/` | The root component and all other components |

### Inside `src/app/`

| File | Purpose |
|------|---------|
| `app.ts` | Root component class — defines which HTML and CSS to use |
| `app.html` | Root component template (the view) |
| `app.css` | Root component styles (scoped to this component) |
| `app.spec.ts` | Unit test file for the root component |
| `app.config.ts` | Application-level configuration (providers, router setup) |
| `app.routes.ts` | All route definitions for the app |

### How It All Connects

```
Browser loads index.html
    → index.html has <app-root></app-root>
    → main.ts bootstraps the App component
    → App component (app.ts) renders app.html
    → app.routes.ts defines page navigation
    → app.config.ts provides services and router
```

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 6. Angular CLI

### What Is Angular CLI?

The **Angular CLI (Command Line Interface)** is a powerful tool that automates common development tasks — creating projects, generating components, building, testing, and deploying Angular applications.

### Why Use the CLI?

- **Consistency:** Every generated file follows Angular best practices.
- **Speed:** Generate boilerplate in seconds instead of writing it manually.
- **Configuration:** Build, serve, and test configs are managed for you.

### Essential CLI Commands

| Command | What It Does |
|---------|--------------|
| `ng new app-name` | Create a brand new Angular project |
| `ng serve` | Start the development server (http://localhost:4200) |
| `ng serve --open` | Start dev server AND open browser automatically |
| `ng generate component name` | Generate a new component (shortcut: `ng g c name`) |
| `ng generate service name` | Generate a new service (shortcut: `ng g s name`) |
| `ng generate pipe name` | Generate a new pipe (shortcut: `ng g p name`) |
| `ng build` | Create a production-ready build in `dist/` folder |
| `ng test` | Run unit tests |
| `ng version` | Show Angular CLI and package versions |

### Generate Inside Subdirectories

```bash
# Generate a service inside a specific folder
ng generate service services/user-service

# This creates: src/app/services/user-service.ts
```

[🔝 Back to Table of Contents](#-table-of-contents)

---

# 🔵 PHASE 2 — Core Concepts & TypeScript Basics

> _Now that your project is set up, let's understand the building blocks — components and TypeScript data types._

---

## 7. Components in Angular

### What Is a Component?

A component is the **fundamental building block** of an Angular application. Every piece of UI you see is a component — the header, sidebar, cards, forms — everything. A component controls a portion of the screen called a **view**.

### Why Start with Components?

Everything in Angular revolves around components. Before learning how to display data, handle events, or navigate between pages — you must understand what a component is and how it's structured. Every topic that follows builds on top of components.

### Every Component Has 4 Files

| File | Purpose |
|------|---------|
| `component.ts` | **Logic** — The TypeScript class that holds data and methods |
| `component.html` | **View** — The HTML template that defines what the user sees |
| `component.css` | **Style** — CSS scoped only to this component |
| `component.spec.ts` | **Test** — Unit test for this component |

### Types of Components

| Type | Description | Example |
|------|-------------|---------|
| **Root Component** | The top-level component that bootstraps the app | `AppComponent` |
| **Feature Components** | Represent a specific feature/page | `LoginComponent`, `DashboardComponent` |
| **Shared Components** | Reusable across multiple features | `ButtonComponent`, `ModalComponent` |
| **Standalone Components** | Self-contained — don't need an NgModule (modern Angular default) | Any component with `standalone: true` |
| **Smart (Container) Components** | Handle logic, data fetching, and state | `UserListComponent` (fetches from API) |
| **Dumb (Presentational) Components** | Only display data passed to them via `@Input()` | `UserCardComponent` (just shows data) |

### Component Structure Example

```typescript
// app.ts — Root Component
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',       // HTML tag name to use this component
  templateUrl: './app.html',   // Path to the HTML template
  styleUrl: './app.css'        // Path to the CSS file
})
export class App {
  title = 'My Angular App';   // Component property
}
```

```html
<!-- app.html -->
<h1>{{ title }}</h1>
```

### How to Create a Component

```bash
# Using Angular CLI (recommended)
ng generate component my-component
# Shortcut
ng g c my-component
```

This generates 4 files inside `src/app/my-component/`:
- `my-component.ts`
- `my-component.html`
- `my-component.css`
- `my-component.spec.ts`

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 8. Creating a Component Without CLI

### Why Create Manually?

While `ng generate component` is the standard approach, understanding how to create a component manually helps you understand what Angular does behind the scenes.

### Step-by-Step Manual Creation

**Step 1:** Create a folder for your component:

```
src/app/my-component/
```

**Step 2:** Create the TypeScript file (`my-component.ts`):

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.html',
  styleUrl: './my-component.css',
})
export class MyComponent {
  title = 'Created Manually!';
}
```

**Step 3:** Create the HTML template (`my-component.html`):

```html
<h2>{{ title }}</h2>
```

**Step 4:** Create the CSS file (`my-component.css`):

```css
h2 {
  color: purple;
}
```

**Step 5:** Import and use in the parent component:

```typescript
// In app.ts or any parent component
import { MyComponent } from './my-component/my-component';

@Component({
  imports: [MyComponent],  // Add to imports array
  // ...
})
export class App {}
```

```html
<!-- In app.html -->
<app-my-component></app-my-component>
```

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 9. Inline Component

### What Is an Inline Component?

An inline component defines its template and styles **directly in the TypeScript file** instead of separate `.html` and `.css` files. This is useful for very small components.

### When to Use

- Components with only 2-3 lines of HTML.
- Simple presentational components.
- Quick prototyping.

### Example

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-inline',
  // Inline template using backticks for multi-line
  template: `
    <h2>{{ title }}</h2>
    <p>This is an inline component</p>
  `,
  // Inline styles
  styles: [`
    h2 { color: teal; }
    p { font-style: italic; }
  `]
})
export class InlineComponent {
  title = 'Inline Component';
}
```

### Key Properties

| Property | For Separate File | For Inline |
|----------|-------------------|------------|
| Template | `templateUrl: './file.html'` | `template: '...'` |
| Styles | `styleUrl: './file.css'` | `styles: ['...']` |
| Multiple styles | `styleUrls: ['a.css', 'b.css']` | `styles: ['rule1', 'rule2']` |

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 10. Data Types in Angular (TypeScript)

### What Are Data Types?

Angular uses **TypeScript**, which extends JavaScript with **static type checking**. You define what type of data a variable can hold, and TypeScript will throw errors if you try to assign the wrong type.

### Why Learn This Before Data Binding?

You're about to write component properties that display in templates. Understanding types ensures you write correct, error-free code from the start. Every property, signal, and function parameter benefits from proper typing.

### Why Use Data Types?

- **Catch errors at compile time** instead of runtime.
- **Better IDE support** — autocompletion, refactoring, and intellisense.
- **Self-documenting code** — types tell other developers what data is expected.

### Basic Types

```typescript
// String
let name: string = "Kartik";

// Number
let age: number = 22;

// Boolean
let isActive: boolean = true;

// Array
let users: string[] = ["Kartik", "Aryan", "Vivek"];
let scores: number[] = [90, 85, 78];

// Object
let user: { name: string; age: number } = { name: "Kartik", age: 22 };

// Any (avoid when possible — disables type checking)
let data: any = "hello";
data = 42;  // No error, but loses type safety

// Undefined & Null
let value: string | undefined = undefined;
let result: number | null = null;
```

### Multiple Data Types (Union Types)

```typescript
// A variable that can hold a string OR a number
let id: string | number = "ABC123";
id = 456;  // Also valid
```

### Defining Types in Component Properties

```typescript
export class AppComponent {
  // Typed properties in the component class
  name: string = "Kartik";
  age: number = 22;
  isLoggedIn: boolean = false;
  users: string[] = ["Kartik", "Aryan"];
}
```

[🔝 Back to Table of Contents](#-table-of-contents)

---

# 🟡 PHASE 3 — Data Binding & Events

> _Now you know what components are and how to define typed properties. Let's learn how to **display** that data in the view and **respond** to user actions._

---

## 11. Interpolation

### What Is Interpolation?

Interpolation is a way to **display data from the TypeScript component class in the HTML template**. It uses **double curly braces `{{ }}`** to evaluate and render expressions.

### Why Is This the First Binding Technique?

Interpolation is the simplest and most common way to show data on screen. Before learning any other binding technique, you need to know how to get data from your component onto the page.

### Why Use Interpolation?

- Display dynamic data in the view without manually manipulating the DOM.
- Angular automatically updates the view whenever the component property changes.
- It's the simplest form of **one-way data binding** (Component → View).

### How It Works

```typescript
// component.ts
export class AppComponent {
  title = 'Angular Tutorial';       // string
  count = 42;                        // number
  isActive = true;                   // boolean
}
```

```html
<!-- component.html -->
<!-- Display a string -->
<h1>{{ title }}</h1>

<!-- Display a number -->
<p>Count: {{ count }}</p>

<!-- Use expressions -->
<p>Double: {{ count * 2 }}</p>

<!-- Use ternary operator -->
<p>Status: {{ isActive ? 'Active' : 'Inactive' }}</p>

<!-- String concatenation -->
<p>{{ 'Hello, ' + title }}</p>
```

### Key Rules & Best Practices

| Rule | Description |
|------|-------------|
| **One-way binding** | Data flows **only** from component → template (not the other way) |
| **Auto-updates** | Angular re-renders the interpolated value when the component property changes |
| **XSS Safe** | Angular sanitizes the output automatically, preventing cross-site scripting attacks |
| **No complex logic** | Avoid heavy calculations inside `{{ }}` — do them in the component class |
| **No side effects** | Don't call functions that modify state inside interpolation |

### Inline Template

Instead of using a separate HTML file, you can write the template directly in the component using `template`:

```typescript
@Component({
  selector: 'app-root',
  // Inline template instead of templateUrl
  template: `<h1>{{ title }}</h1>`,
  styles: [`h1 { color: blue; }`]
})
export class AppComponent {
  title = 'Hello Angular!';
}
```

> **When to use inline templates:** For small components with 2-3 lines of HTML. For larger templates, always use a separate `.html` file.

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 12. Property Binding

### What Is Property Binding?

Property binding lets you **bind a component property to an HTML element's property (attribute)**. While interpolation displays text, property binding is used to set element properties like `disabled`, `src`, `href`, `value`, etc.

### How Is It Different from Interpolation?

Interpolation converts everything to a **string** and displays it as text. Property binding passes the **actual value** (boolean, object, number) to the HTML element's property. You need property binding when the value isn't a simple string.

### Syntax

```html
<!-- [property]="componentProperty" -->
<input [value]="userName">
<button [disabled]="isDisabled">Click</button>
<img [src]="imageUrl">
```

### Code Example (from this project)

**Component (property-binding.ts):**

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.html',
})
export class PropertyBinding {
  btnDisable = false;  // Controls the disabled state

  btnToggle() {
    this.btnDisable = !this.btnDisable;  // Toggle true/false
  }
}
```

**Template (property-binding.html):**

```html
<h1>Property Binding</h1>

<!-- The [disabled] property is bound to btnDisable -->
<button [disabled]="btnDisable">Click</button>

<!-- This button toggles the disabled state -->
<button (click)="btnToggle()">Toggle</button>
```

### Interpolation vs Property Binding

| Feature | Interpolation `{{ }}` | Property Binding `[ ]` |
|---------|----------------------|----------------------|
| **Use for** | Displaying text content | Setting element properties |
| **Data types** | Strings only | Strings, booleans, objects, arrays |
| **Example** | `<p>{{ name }}</p>` | `<input [value]="name">` |
| **Boolean values** | Shows "true"/"false" as text | Actually sets the property |
| **Direction** | Component → View | Component → View |

### When to Use Which?

- **Interpolation:** When you want to show data as **text** inside HTML content.
- **Property Binding:** When you need to set an HTML element **property** (especially booleans, objects, or dynamic attributes).

```html
<!-- ✅ Interpolation: Display text -->
<p>Hello, {{ userName }}</p>

<!-- ✅ Property Binding: Set property -->
<button [disabled]="isLoading">Submit</button>
<img [src]="profileImage">
```

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 13. Event Binding / Click Event

### What Is Event Binding?

Event binding lets you **listen to user events** (clicks, keystrokes, mouse movements) in the HTML template and **call methods** defined in the component class.

### Where Does This Fit?

So far you can display data (interpolation) and set properties (property binding) — both flow **from component to view**. Event binding completes the picture by flowing **from view to component** — it's how your app reacts to the user.

### Why Use Event Binding?

Without event binding, you'd need to manually add `addEventListener` in vanilla JavaScript. Angular handles this declaratively right in the template.

### Syntax

```html
<!-- (eventName)="methodName()" -->
<button (click)="handleClick()">Click Me</button>
```

### Code Example (from this project)

**Component (event-handling.ts):**

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-event-handling',
  templateUrl: './event-handling.html',
  styleUrl: './event-handling.css',
})
export class EventHandling {
  // Counter property
  count = 0;

  // Method to increment or decrement
  counter(action: string) {
    if (action === 'plus') {
      this.count++;
    } else {
      this.count > 0 && this.count--;  // Prevent going below 0
    }
  }

  // Track which event was triggered
  eventName = "";

  eventHandler(action: string) {
    console.log(action);
    this.eventName = action;
  }
}
```

**Template (event-handling.html):**

```html
<h1>Event Handling</h1>

<!-- Click event: calling method with argument -->
<button (click)="counter('plus')">+</button>
<span> {{ count }} </span>
<button (click)="counter('minus')">-</button>

<!-- Displaying which event was triggered -->
<h2>Multiple Events like "{{ eventName }}"</h2>

<!-- Different event types -->
<input type="text" (input)="eventHandler($event.type)">
<input type="text" (change)="eventHandler($event.type)">
<input type="text" (blur)="eventHandler($event.type)">
<input type="text" (focus)="eventHandler($event.type)">
<button (click)="eventHandler($event.type)">Click</button>

<!-- Mouse events on div elements -->
<div (mouseenter)="eventHandler($event.type)" class="div1"></div>
<div (mouseleave)="eventHandler($event.type)" class="div2"></div>
```

### How It Works

1. User interacts with the element (click, type, hover, etc.)
2. Angular detects the event and calls the bound method
3. The method updates component data
4. Angular re-renders the view with updated data

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 14. Important Events in Angular

Angular supports all standard DOM events. Here are the most commonly used:

| Event | Trigger | Use Case |
|-------|---------|----------|
| `(click)` | User clicks on the element | Buttons, links, toggles |
| `(input)` | User types in an input field (fires on every keystroke) | Live search, real-time filtering |
| `(change)` | Value changes and the element loses focus | Dropdowns, file uploads |
| `(blur)` | Element loses focus | Form validation on field exit |
| `(focus)` | Element gains focus | Highlighting, showing help text |
| `(mouseenter)` | Mouse cursor enters the element | Hover effects, tooltips |
| `(mouseleave)` | Mouse cursor leaves the element | Removing hover effects |
| `(keyup)` | User releases a key | Search on Enter key |
| `(keydown)` | User presses a key | Keyboard shortcuts |
| `(submit)` | Form is submitted | Form handling |

### Accessing the Event Object

Use `$event` to access the native DOM event:

```html
<!-- Get the value the user typed -->
<input (input)="onInput($event)">

<!-- Get the event type -->
<button (click)="handler($event.type)">Click</button>
```

```typescript
onInput(event: Event) {
  const target = event.target as HTMLInputElement;
  console.log(target.value);  // The current value of the input
}
```

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 15. Two-Way Data Binding

### What Is Two-Way Data Binding?

Two-way data binding means data flows in **both directions** — from the component to the template **AND** from the template back to the component. When the user types in an input field, the component property updates; when the component property changes, the input field updates.

### Where Does This Fit?

You've now learned all three one-directional bindings:
1. **Interpolation** `{{ }}` — Component → View (text)
2. **Property binding** `[ ]` — Component → View (properties)
3. **Event binding** `( )` — View → Component (actions)

Two-way binding combines property binding and event binding into **one syntax**: `[( )]` — often called **"banana in a box"**.

### Why Use It?

- Forms become effortless — no manual syncing.
- Changes are reflected instantly in both directions.

### Three Ways to Achieve Two-Way Binding

---

### 1. `[(ngModel)]` — Built-in Two-Way Binding

Requires importing `FormsModule`:

```typescript
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],  // Must import FormsModule
})
export class TwoWayBinding {
  age = 20;  // Normal property (not a signal)
}
```

```html
<h3>{{ age }}</h3>
<!-- ngModel handles both reading and writing -->
<input type="text" [(ngModel)]="age">
```

> **Note:** `[(ngModel)]` is shorthand for `[ngModel]="age" (ngModelChange)="age = $event"`.

---

### 2. Signal-Based Two-Way Binding (Manual)

```typescript
name = signal("Kartik");
```

```html
<h3>{{ name() }}</h3>
<!-- Read signal with [value], write with (input) -->
<input type="text" [value]="name()" (input)="name.set($event.target.value)">
```

---

### 3. Object Signal Two-Way Binding

```typescript
userDetail = signal({
  name: "Kartik",
  age: 21,
  email: "kartik@test.com",
});

updateUserDetail(key: string, val: string) {
  // Update a specific key in the object signal
  this.userDetail.update((prev) => ({ ...prev, [key]: val }));
}
```

```html
<h3>{{ userDetail().name }}</h3>
<input type="text"
  [value]="userDetail().name"
  (input)="updateUserDetail('name', $event.target.value)">

<h3>{{ userDetail().age }}</h3>
<input type="text"
  [value]="userDetail().age"
  (input)="updateUserDetail('age', $event.target.value)">

<h3>{{ userDetail().email }}</h3>
<input type="text"
  [value]="userDetail().email"
  (input)="updateUserDetail('email', $event.target.value)">
```

[🔝 Back to Table of Contents](#-table-of-contents)

---

# 🟣 PHASE 4 — Signals & Reactivity

> _You've learned the traditional ways to bind data. Now let's learn Angular's modern **reactive system** — Signals — which makes change detection faster and code cleaner._

---

## 16. Signals

### What Are Signals?

A **Signal** is a **reactive wrapper** around a value. When the value inside a signal changes, Angular knows exactly which part of the UI needs to be updated — making updates faster and more efficient.

### Why Signals?

Before signals, Angular used **zone.js** for change detection — it would check the **entire component tree** on every event. This was slow for large applications.

Signals solve this by providing **fine-grained reactivity** — Angular only updates the specific parts of the DOM that depend on the changed signal.

### What If Signals Didn't Exist?

- You'd rely on zone.js-based change detection (less performant for large apps).
- Every user event would trigger a full component tree check.
- You'd need external state management libraries like NgRx or RxJS BehaviorSubjects for reactivity.

### Signals vs Normal Properties

| Feature | Signals | Normal Properties |
|---------|---------|-------------------|
| Reactivity | ✅ Reactive — Angular tracks changes | ❌ Not reactive |
| UI Updates | Auto-updates only affected parts | Full component re-check |
| Change Detection | Fine-grained (efficient) | Full component check (slower) |
| Read Syntax | `count()` (call as function) | `count` (direct access) |
| Write Syntax | `set()` / `update()` | Direct assignment `=` |
| Performance | ⚡ Faster for large apps | 🐢 Slower for large apps |

### Types of Signals

| Type | Description | Read/Write |
|------|-------------|------------|
| **Writable Signal** | A signal whose value you can change | Read + Write |
| **Computed Signal** | A derived signal — automatically recalculates when dependencies change | Read Only |
| **Effect** | Runs side effects whenever a signal it reads changes | N/A (action) |

### Code Example (from this project)

**Component (signals.ts):**

```typescript
import { Component, computed, effect, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.html',
})
export class Signals {
  // ✅ Writable Signal — value can be changed
  countSignal = signal(0);

  // ❌ Normal Property — for comparison
  count = 0;

  // ✅ Typed Signal
  value: WritableSignal<string> = signal('');

  // Methods to update
  updateCountS() {
    // update() receives the current value and returns the new value
    this.countSignal.update(val => val + 1);
  }

  updateCountP() {
    // Normal property — direct assignment
    this.count = this.count + 1;
  }

  // Set a specific value
  defaultValue() {
    this.value.set("Hello World!");  // set() replaces the value entirely
  }

  // Update from input field
  setValue(val: string) {
    this.value.set(val);
  }
}
```

**Template (signals.html):**

```html
<h2>Signal</h2>
<!-- Reading a signal: call it as a function with () -->
<p>Count Signal : {{ countSignal() }}</p>
<button (click)="updateCountS()">Count Signal Update</button>

<!-- Normal property: no () needed -->
<p>Count Property : {{ count }}</p>
<button (click)="updateCountP()">Count Property Update</button>

<h2>Input Field Binding</h2>
<p>Value : {{ value() }}</p>
<input type="text" [value]="value()" (input)="setValue($event.target.value)">
<button (click)="defaultValue()">Default Value</button>
```

### Signal Methods

| Method | Purpose | Example |
|--------|---------|---------|
| `signal(initialValue)` | Create a new writable signal | `count = signal(0)` |
| `.set(newValue)` | Replace the current value entirely | `count.set(10)` |
| `.update(fn)` | Update based on current value | `count.update(c => c + 1)` |
| Signal read `()` | Get the current value | `count()` returns the number |

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 17. Computed Signals

### What Is a Computed Signal?

A **computed signal** is a **read-only signal** that automatically recalculates its value whenever any signal it depends on changes. Think of it as a formula cell in Excel — it updates automatically when the referenced cells change.

### Why Use Computed Signals?

- Avoid manually recalculating derived values.
- The computation only runs when dependencies actually change (efficient).
- Keeps your logic clean and declarative.

### Code Example (from this project)

```typescript
import { Component, computed, signal } from '@angular/core';

export class Signals {
  // Two writable signals
  height = signal(0);
  width = signal(0);

  // Computed signal — automatically recalculates when height or width changes
  area = computed(() => this.height() * this.width());

  // Update helper
  updateValue(signalRef: WritableSignal<number>, change: number) {
    signalRef.update(value => Math.max(0, value + change));
  }
}
```

```html
<!-- Increment/Decrement height -->
<button (click)="updateValue(height, 1)">+</button>
<span> Height : {{ height() }} </span>
<button (click)="updateValue(height, -1)">-</button>

<!-- Increment/Decrement width -->
<button (click)="updateValue(width, 1)">+</button>
<span> Width : {{ width() }} </span>
<button (click)="updateValue(width, -1)">-</button>

<!-- Area auto-updates when height or width changes -->
<p>Area (Height * Width) : {{ area() }}</p>
```

### How It Works

1. `height` and `width` are writable signals.
2. `area` is a **computed** signal that reads `height()` and `width()`.
3. When the user clicks `+` to increase height, `height` signal changes.
4. Angular detects that `area` depends on `height`, so it recalculates `area`.
5. The template re-renders **only** the area display — not the entire component.

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 18. Effect in Angular

### What Is an Effect?

An **effect** is a function that runs **automatically** whenever any signal it reads changes. Unlike computed signals (which return values), effects perform **side effects** — like logging, making API calls, or updating the DOM.

### Why Use Effects?

- React to signal changes without manually watching them.
- Perfect for side effects: logging, analytics, localStorage, etc.
- Replaces manual subscriptions in many cases.

### Key Behavior

- Effects are created inside the `constructor`.
- They run automatically when **any signal read inside them** changes.
- If the effect reads signal A and signal B, it runs when **either** changes.
- If the effect only reads signal A, changing signal B **does not** trigger it.

### Code Example (from this project)

```typescript
import { Component, effect, signal } from '@angular/core';

export class Signals {
  speed = signal(0);
  color = signal("black");

  constructor() {
    // This effect runs whenever 'speed' changes
    effect(() => {
      // Read the speed signal — this creates a dependency
      if (this.speed() >= 0 && this.speed() < 80) {
        this.color.set("green");     // Safe speed
      } else if (this.speed() >= 80 && this.speed() < 120) {
        this.color.set("orange");    // Warning speed
      } else {
        this.color.set("red");       // Danger speed
      }
    });
  }

  updateSpeed(change: number) {
    this.speed.update(value => Math.max(0, value + change));
  }
}
```

```html
<!-- Color changes automatically based on speed -->
<p [style.color]="color()">Speed : {{ speed() }}</p>
<button (click)="updateSpeed(10)">Increase Speed</button>
<button (click)="updateSpeed(-speed())">Reset Speed</button>
```

### How This Effect Works

1. User clicks "Increase Speed" → `speed` signal changes (e.g., 0 → 10).
2. Angular detects that the effect **reads** `speed()`.
3. The effect runs automatically, evaluates the condition, and sets `color`.
4. The `[style.color]` binding in the template updates to reflect the new color.

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 19. Data Types with Signals

### How to Add Type Safety to Signals

By default, TypeScript infers the signal's type from the initial value. But you can explicitly define types for better control.

```typescript
import { signal, WritableSignal } from '@angular/core';

// ✅ Type is inferred as WritableSignal<number>
count = signal(0);

// ✅ Explicitly typed signal
value: WritableSignal<string> = signal('');

// ✅ Union type signal (can hold string OR number)
id: WritableSignal<string | number> = signal<string | number>('ABC');

// ✅ Object signal
user = signal({ name: "Kartik", age: 22, email: "kartik@test.com" });

// ✅ Array signal
users = signal<string[]>(["Kartik", "Aryan"]);
```

### Updating Signal Values

| Method | Use Case | Example |
|--------|----------|---------|
| `set()` | Replace the entire value | `name.set("New Name")` |
| `update()` | Transform based on current value | `count.update(c => c + 1)` |

```typescript
// Using set() — replaces the value
this.value.set("Hello World!");

// Using update() — transforms the current value
this.countSignal.update(val => val + 1);
```

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 20. Get & Set Value with Input Field

### Binding Signals to Input Fields

There are two approaches to connect an input field to a signal:

### Approach 1: Manual Binding (using `[value]` + `(input)`)

```typescript
value: WritableSignal<string> = signal('');

setValue(val: string) {
  this.value.set(val);
}
```

```html
<p>Value : {{ value() }}</p>
<input type="text" [value]="value()" (input)="setValue($event.target.value)">
```

### How It Works

1. `[value]="value()"` — Property binding sets the input's displayed value from the signal.
2. `(input)="setValue($event.target.value)"` — Event binding captures the user's typed value and updates the signal.
3. When the signal updates, the `<p>` tag re-renders with the new value.

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 21. Getter & Setter for Signals

### What Is the Getter/Setter Pattern?

TypeScript's `get` and `set` accessors act as a bridge between signals and `[(ngModel)]`. Since `ngModel` expects a plain property (not a signal), getters and setters let you use `ngModel` with signals seamlessly.

### Why Use It?

- `[(ngModel)]` doesn't work directly with signals (because signals need `()` to read and `.set()` to write).
- Getters/Setters create a "normal property" interface that internally reads and writes the signal.

### Code Example (from this project)

**Simple Signal with Getter/Setter:**

```typescript
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-getter-setter',
  imports: [FormsModule],
  templateUrl: './getter-setter.html',
})
export class GetterSetter {
  userName = signal("Kartik");

  // Getter: reads the signal
  get uName() {
    return this.userName();
  }

  // Setter: writes to the signal
  set uName(val) {
    this.userName.set(val);
  }
}
```

```html
<h3>{{ uName }}</h3>
<!-- Now ngModel works with the signal through getter/setter -->
<input type="text" [(ngModel)]="uName">
```

**Object Signal with Getter/Setter:**

```typescript
userDetail = signal({
  name: "Kartik",
  email: "kartik@test.com"
});

get userDetailName() {
  return this.userDetail().name;
}

set userDetailName(val) {
  this.userDetail.update((prev) => ({ ...prev, name: val }));
}

get userEmail() {
  return this.userDetail().email;
}

set userEmail(val) {
  this.userDetail.update((prev) => ({ ...prev, email: val }));
}
```

```html
<h3>{{ userDetailName }}</h3>
<input type="text" [(ngModel)]="userDetailName">
<h3>{{ userEmail }}</h3>
<input type="text" [(ngModel)]="userEmail">
```

[🔝 Back to Table of Contents](#-table-of-contents)

---

# 🟠 PHASE 5 — Template Logic & Directives

> _You can now display data and handle events. Let's learn how to **conditionally show/hide** elements and **loop over** data in the template._

---

## 22. Control Flow Statements

### What Are Control Flow Statements?

Control flow statements in Angular allow you to **conditionally show/hide elements** and **loop over data** directly in the template. Angular 17+ introduced the new **block syntax** (`@if`, `@for`, `@switch`) to replace the older directive syntax.

### Why Were They Introduced?

The older `*ngIf` and `*ngFor` directives required importing `CommonModule`. The new block syntax is:
- Built into the template engine (no imports needed)
- More readable
- Better performance
- Supports `@else if` directly

---

### `@if` / `@else` — Conditional Rendering

```typescript
// control-flow.ts
export class ControlFlow {
  isLogin = signal(false);

  handleLogin(change: boolean) {
    this.isLogin.set(change);
  }
}
```

```html
<!-- Show/hide based on condition -->
@if (isLogin()) {
  <span>Welcome, user</span>
  <button (click)="handleLogin(false)">Logout</button>
} @else {
  <span>Please login</span>
  <button (click)="handleLogin(true)">Login</button>
}
```

### `@if` / `@else if` / `@else` — Multiple Conditions

```html
@if (status() == 'notStarted') {
  <span>Not Started</span>
} @else if (status() == 'inProgress') {
  <span style="color: orange">In Progress</span>
} @else if (status() == 'success') {
  <span style="color: green">Success</span>
} @else {
  <span style="color: red">Error</span>
}
```

---

### `@for` — Looping Over Data

```typescript
users = signal(["Kartik", "Aryan", "Vivek", "Darshit"]);
userDetails = signal([
  { id: 1, name: "Kartik", surname: "Ahir", email: "kartik@test.com" },
  { id: 2, name: "Aryan", surname: "Nai", email: "aryan@test.com" },
  { id: 3, name: "Vivek", surname: "Bhimani", email: "vivek@test.com" },
  { id: 4, name: "Darshit", surname: "Parmar", email: "darshit@test.com" },
]);
```

```html
<!-- Simple array loop -->
<ul>
  @for (user of users(); track user) {
    <li>{{ user }}</li>
  }
</ul>

<!-- Array of objects with built-in variables -->
<ul>
  @for (userDetail of userDetails(); track userDetail.id) {
    <li [style.backgroundColor]="$even ? '#CCC' : '#DDD'">
      {{ userDetail.id + ' ' + userDetail.name + ' ' + userDetail.surname }}

      <!-- $first: true for the first item -->
      @if ($first) {
        <span style="color: red;">Admin</span>
      }
      <!-- $last: true for the last item -->
      @if ($last) {
        <span style="color: orange;">Guest</span>
      }
    </li>
    <!-- $count: total items, $index: current index -->
    @if ($count == $index + 1) {
      <span>Total users : {{ $count }}</span>
    }
  }
</ul>
```

### `@for` Built-in Variables

| Variable | Type | Description |
|----------|------|-------------|
| `$index` | `number` | Index of the current item (0-based) |
| `$count` | `number` | Total number of items |
| `$first` | `boolean` | `true` for the first item |
| `$last` | `boolean` | `true` for the last item |
| `$even` | `boolean` | `true` if index is even |
| `$odd` | `boolean` | `true` if index is odd |

### `@empty` — Show When Array Is Empty

```html
@for (task of tasks(); track task.id) {
  <li>{{ task.title }}</li>
} @empty {
  <span>No Tasks Found</span>
}
```

---

### `@switch` / `@case` — Switch Statement

```html
@switch (status()) {
  @case ('notStarted') {
    <span>No update Yet</span>
  }
  @case ('inProgress') {
    <span style="color: orange">In Progress</span>
  }
  @case ('success') {
    <span style="color: green">Success</span>
  }
  @default {
    <span style="color: red">Error</span>
  }
}
```

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 23. Directives

### What Is a Directive?

A **directive** is a class that allows you to **change the behavior, appearance, or structure** of DOM elements. Directives are like instructions attached to HTML elements.

### How Do Directives Relate to Control Flow?

The `@if`, `@for`, `@switch` syntax you just learned is the **modern way**. Directives (`*ngIf`, `*ngFor`, `[ngSwitch]`) are the **older way** that still works and is common in existing codebases. You need to know both.

### Types of Directives

| Type | Purpose | Examples |
|------|---------|---------|
| **Component Directives** | A component is technically a directive with a template | `@Component` |
| **Structural Directives** | Add, remove, or manipulate DOM elements (change structure) | `*ngIf`, `*ngFor`, `*ngSwitch` |
| **Attribute Directives** | Modify the appearance or behavior of an element | `ngStyle`, `ngClass` |

### Structural Directives (Older Syntax — Still Valid)

> The older `*ngIf` / `*ngFor` syntax requires importing `CommonModule`. The newer `@if` / `@for` block syntax (Topic 22) is recommended for new projects.

#### `*ngIf` — Conditional Display

```typescript
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],  // Required for *ngIf
})
export class StructureDirective {
  isLogin = signal(false);
}
```

```html
<!-- Show h1 if isLogin is true, otherwise show the else template -->
<h1 *ngIf="isLogin(); else elseBlock" [ngStyle]="{ color: color }">
  Welcome Application
</h1>
<ng-template #elseBlock>
  <h1 [ngStyle]="{ color: color }">Not Welcome</h1>
</ng-template>

<button (click)="isLogin() ? isLogin.set(false) : isLogin.set(true)">
  {{ isLogin() ? "Logout" : "Login" }}
</button>
```

#### `*ngFor` — Looping

```html
<ul *ngFor="let user of users()">
  <li [style.color]="color">{{ user }}</li>
</ul>
```

#### `[ngSwitch]` — Switch Case

```html
<div [ngSwitch]="color">
  <p *ngSwitchCase="'red'" style="color: red">Color is red</p>
  <p *ngSwitchCase="'blue'" style="color: blue">Color is blue</p>
  <p *ngSwitchCase="'green'" style="color: green">Color is green</p>
  <p *ngSwitchDefault style="color: black">Color is default</p>
</div>
```

### Attribute Directives

#### `[ngStyle]` — Dynamic Inline Styles

```html
<h1 [ngStyle]="{ color: 'red', 'font-size': '24px' }">Styled Text</h1>
<h1 [ngStyle]="{ color: color }">Dynamic Color</h1>
```

#### `[ngClass]` — Dynamic CSS Classes

```html
<div [ngClass]="{ 'active': isActive, 'disabled': !isActive }">
  Conditional classes
</div>
```

### Old vs New Syntax Comparison

| Old (Directive) | New (Block) |
|-----------------|-------------|
| `*ngIf="condition"` | `@if (condition) { }` |
| `*ngFor="let item of items"` | `@for (item of items; track item) { }` |
| `[ngSwitch]` + `*ngSwitchCase` | `@switch (value) { @case (x) { } }` |

[🔝 Back to Table of Contents](#-table-of-contents)

---

# 🎨 PHASE 6 — Styling

> _Your components work functionally. Now let's make them look good._

---

## 24. Styling Options & Rules

Angular provides multiple ways to style components. Each method has its own scope and use case.

### 1. Component CSS (Recommended)

Each component has its own CSS file. Styles are **scoped** — they only affect that component and don't leak to other components.

```typescript
@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.html',
  styleUrl: './my-component.css'    // Scoped to this component only
})
```

### 2. Global CSS

Styles defined in `src/styles.css` apply to the **entire application**.

```css
/* src/styles.css — applies globally */
* {
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, sans-serif;
}
```

### 3. Multiple Global CSS Files

You can add multiple global stylesheets in `angular.json`:

```json
// angular.json
"styles": [
  "src/styles.css",
  "src/theme.css",
  "src/typography.css"
]
```

### 4. Inline Styling

Apply styles directly in the template using `[style]`:

```html
<p [style.color]="color()">Dynamic color text</p>
<p style="color: red">Static inline style</p>
```

### 5. Internal Styling (in `@Component`)

For tiny components, define styles inline in the component decorator:

```typescript
@Component({
  selector: 'app-tiny',
  template: `<h1>Hello</h1>`,
  styles: [`h1 { color: blue; font-size: 24px; }`]
})
```

### 6. Multiple Style Files

```typescript
@Component({
  selector: 'app-example',
  templateUrl: './example.html',
  styleUrls: ['./example.css', './example-theme.css']  // Array of style files
})
```

### When to Use What?

| Method | When to Use |
|--------|------------|
| Component CSS | **Default choice** — scoped, maintainable |
| Global CSS | Resets, fonts, and styles shared across the entire app |
| Inline (`styles`) | Small components with 2-3 lines of CSS |
| `[style]` binding | Dynamic styles based on component data |

[🔝 Back to Table of Contents](#-table-of-contents)

---

# 🔗 PHASE 7 — Component Communication & State

> _Real applications have many components. Let's learn how they talk to each other and share data._

---

## 25. Pass Data: Parent → Child (@Input)

### What Is `@Input()`?

`@Input()` is a decorator that marks a component property as **receivable from a parent component**. It enables the parent to pass data down to the child.

### Why Use It?

- Share data between components.
- Build reusable components that accept different data.
- Follow the unidirectional data flow pattern (top-down).

### How It Works

**Child Component (child.ts):**

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  // @Input() — this property can receive data from the parent
  @Input() userName: string | undefined;
}
```

**Child Template (child.html):**

```html
<li>{{ userName }}</li>
```

**Parent Component (parent.ts):**

```typescript
import { Component, signal } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent',
  imports: [Child],         // Import the child component
  templateUrl: './parent.html',
})
export class Parent {
  userName = signal("Kartik Ahir");
  users = signal(["Kartik", "Aryan", "Darshit", "Vivek"]);
}
```

**Parent Template (parent.html):**

```html
<h1>Parent</h1>

<!-- Pass a single value to child -->
<app-child [userName]="userName()"></app-child>

<!-- Pass data in a loop — creating multiple child instances -->
@for (user of users(); track user) {
  <app-child [userName]="user"></app-child>
}
```

### Data Flow Diagram

```
┌─────────────────────────┐
│ PARENT COMPONENT        │
│                         │
│ userName = "Kartik"     │
│                         │
│ ┌──────[userName]──────┐│
│ │                      ││
│ │  ┌─────────────────┐ ││
│ │  │ CHILD COMPONENT │ ││
│ │  │ @Input() userName│ ││
│ │  │ = "Kartik"      │ ││
│ │  └─────────────────┘ ││
│ └──────────────────────┘│
└─────────────────────────┘
```

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 26. Pass Data: Child → Parent (@Output)

### What Is `@Output()`?

`@Output()` is a decorator that marks an **EventEmitter** property in a child component, allowing the child to **send data or events back up** to the parent.

### Why Use It?

- When a child needs to notify the parent about something (button click, selection, deletion, etc.)
- The parent defines what action to take when the event is received.

### How It Works

**Child Component (child.ts):**

```typescript
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.html',
})
export class Child {
  @Input() userName: string | undefined;

  // @Output() — emits events to the parent
  @Output() selectedUser = new EventEmitter();
  @Output() deletedUser = new EventEmitter();

  handleSelectUser(name: string | undefined) {
    this.selectedUser.emit(name);   // Send data to parent
  }

  handleDeleteUser(name: string | undefined) {
    this.deletedUser.emit(name);    // Send data to parent
  }
}
```

**Child Template (child.html):**

```html
<li>
  {{ userName }}
  <button (click)="handleSelectUser(userName)">Select</button>
  <button (click)="handleDeleteUser(userName)">Delete</button>
</li>
```

**Parent Component (parent.ts):**

```typescript
@Component({
  imports: [Child],
})
export class Parent {
  selectedUserName = signal('');

  // Called when child emits the 'selectedUser' event
  selectedUser(name: string) {
    this.selectedUserName.set(name);
  }

  // Called when child emits the 'deletedUser' event
  deleteUser(name: string) {
    this.users.update((users) => users.filter(user => user != name));
  }
}
```

**Parent Template (parent.html):**

```html
<h2>Selected user : {{ selectedUserName() }}</h2>

<!-- Listen to child's @Output events -->
<app-child
  [userName]="userName()"
  (selectedUser)="selectedUser($event)"
  (deletedUser)="deleteUser($event)"
></app-child>
```

### Data Flow Diagram

```
┌─────────────────────────────────┐
│ PARENT COMPONENT                │
│                                 │
│ selectedUser(name) { ... }      │
│            ▲                    │
│    (selectedUser)="..."         │
│            │                    │
│  ┌─────────┴───────────┐       │
│  │ CHILD COMPONENT     │       │
│  │                     │       │
│  │ @Output()           │       │
│  │ selectedUser.emit() │       │
│  └─────────────────────┘       │
└─────────────────────────────────┘
```

### Summary

| Decorator | Direction | Purpose |
|-----------|-----------|---------|
| `@Input()` | Parent → Child | Send data down |
| `@Output()` | Child → Parent | Send events/data up |

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 27. Global State with Signals

### What Is Global State?

When you need to **share data between components that are not directly parent-child**, you need a **global state management** solution. In Angular, you can use a service with signals to achieve this.

### Why Use Global State?

- Avoid "prop drilling" — passing data through many levels of components.
- Multiple unrelated components can read and update the same data.
- Single source of truth for shared data.

### How to Implement

**Step 1:** Create a Signal Store Service:

```typescript
// global-data-share/store/counter.ts
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',   // Available globally — single instance
})
export class Counter {
  // Shared signal — any component can read/write this
  count = signal(0);

  increment() {
    this.count.update((c) => c + 1);
  }

  decrement() {
    this.count.update((c) => c - 1);
  }

  reset() {
    this.count.set(0);
  }
}
```

**Step 2:** Display Component (reads the signal):

```typescript
// display-counter.ts
import { Component } from '@angular/core';
import { Counter } from '../store/counter';

@Component({
  selector: 'app-display-counter',
  templateUrl: './display-counter.html',
})
export class DisplayCounter {
  // Inject the service — same instance as other components
  constructor(public state: Counter) {}
}
```

```html
<!-- display-counter.html -->
<h2>Display Count</h2>
<h3>{{ state.count() }}</h3>
<button (click)="state.reset()">Reset</button>
```

**Step 3:** Control Component (updates the signal):

```typescript
// control-counter.ts
import { Component } from '@angular/core';
import { Counter } from '../store/counter';

@Component({
  selector: 'app-control-counter',
  templateUrl: './control-counter.html',
})
export class ControlCounter {
  constructor(public state: Counter) {}
}
```

```html
<!-- control-counter.html -->
<h2>Control Count</h2>
<button (click)="state.increment()">Increment</button>
<button (click)="state.decrement()">Decrement</button>
```

**Step 4:** Use Both in App Template:

```html
<!-- app.html -->
<app-display-counter></app-display-counter>
<hr>
<app-control-counter></app-control-counter>
```

### How It Works

Both `DisplayCounter` and `ControlCounter` inject the **same** `Counter` service instance (because `providedIn: 'root'` creates a singleton). When `ControlCounter` increments the count, `DisplayCounter` automatically shows the updated value — they share the same signal.

[🔝 Back to Table of Contents](#-table-of-contents)

---

# 🛠️ PHASE 8 — Mini Project

> _Time to put everything together. Let's build a real feature from scratch._

---

## 28. To-Do List Component (Mini Project)

### What We Built

A functional To-Do List using Angular signals — users can add tasks, view them, and delete them. This project combines everything from Phases 1-7.

### Concepts Used

- ✅ Components (Phase 2)
- ✅ Signals for reactive state (Phase 4)
- ✅ Event binding for add/delete (Phase 3)
- ✅ `@for` loop with `track` (Phase 5)
- ✅ `@empty` for empty state (Phase 5)
- ✅ `update()` with spread operator for immutable array updates (Phase 4)

### Component Code (to-do-list-signal.ts)

```typescript
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-to-do-list-signal',
  templateUrl: './to-do-list-signal.html',
  styleUrl: './to-do-list-signal.css',
})
export class ToDoListSignal {
  // Signal holding an array of task objects
  tasks = signal([
    { id: 0, title: "Hello World", completed: false }
  ]);

  // Signal for the input field
  task = signal('');

  // Add a new task
  handleAddTask() {
    if (this.task()) {  // Only add if the input isn't empty
      this.tasks.update((prev) => ([
        ...prev,
        { id: this.tasks().length, title: this.task(), completed: false }
      ]));
      this.task.set('');  // Clear the input after adding
    }
  }

  // Delete a task by id
  handleDelete(id: number) {
    this.tasks.update((tasks) => tasks.filter((task) => task.id != id));
  }
}
```

### Template (to-do-list-signal.html)

```html
<h2>TO DO List</h2>

<!-- Input field for new task -->
<input type="text" [value]="task()"
  (change)="task.set($event.target.value)"
  placeholder="enter task" />
<button (click)="handleAddTask()">Add task</button>

<!-- List of tasks -->
<ul>
  @for (task of tasks(); track task.id) {
    <li>
      <span>{{ $index + 1 }}</span>       <!-- Task number -->
      <span>{{ task.title }}</span>        <!-- Task title -->
      <button (click)="handleDelete(task.id)">Delete</button>
    </li>
  }
  @empty {
    <span>No Task Found</span>            <!-- Shown when list is empty -->
  }
</ul>
```

[🔝 Back to Table of Contents](#-table-of-contents)

---

# 🔄 PHASE 9 — Pipes (Data Transformation)

> _Your app displays raw data. Pipes let you **format and transform** that data before showing it to the user._

---

## 29. Pipes in Angular

### What Are Pipes?

A **pipe** is a special operator (`|`) that **transforms data** in the template before displaying it. It takes a value, processes it, and returns the transformed result.

### Why Use Pipes?

- Format data for display without changing the actual data in the component.
- Keep templates clean — transformation logic stays in the pipe, not in the template.
- Reusable across the entire application.

### Built-in Pipes

| Pipe | Purpose | Example |
|------|---------|---------|
| `uppercase` | Convert text to UPPERCASE | `{{ 'hello' \| uppercase }}` → `HELLO` |
| `lowercase` | Convert text to lowercase | `{{ 'HELLO' \| lowercase }}` → `hello` |
| `titlecase` | Capitalize first letter of each word | `{{ 'hello world' \| titlecase }}` → `Hello World` |
| `date` | Format date objects | `{{ date \| date:'short' }}` → `8/3/05, 12:00 AM` |
| `currency` | Format numbers as currency | `{{ 10000 \| currency:'INR' }}` → `₹10,000.00` |
| `json` | Display objects as JSON string | `{{ user \| json }}` → `{"name":"Kartik"}` |
| `number` | Format numbers | `{{ 3.14159 \| number:'1.2-2' }}` → `3.14` |
| `percent` | Convert to percentage | `{{ 0.85 \| percent }}` → `85%` |

### Code Example (from this project)

```typescript
// built-in-pipe.ts
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-built-in-pipe',
  imports: [CommonModule],  // Required for pipes
  templateUrl: './built-in-pipe.html',
})
export class BuiltInPipe {
  title = signal("kartik ahir");
  amount = 10000;
  date = new Date(2005, 7, 3);  // August 3, 2005
  mobile = "samsung";
  user = signal({ name: "Kartik", age: 21, email: "kartik@test.com" });
}
```

```html
<!-- uppercase pipe -->
<h3>{{ title() | uppercase }}</h3>           <!-- KARTIK AHIR -->

<!-- titlecase pipe -->
<h3>{{ title() | titlecase }}</h3>           <!-- Kartik Ahir -->

<!-- Combining multiple transformations -->
<h3>I bought a {{ mobile | titlecase }} mobile
    on {{ date | date:'short' }}
    in INR {{ amount | currency:'INR' }}</h3>

<!-- json pipe for debugging -->
<h3>{{ user() | json }}</h3>
<!-- {"name":"Kartik","age":21,"email":"kartik@test.com"} -->
```

### Chaining Pipes

You can chain multiple pipes — the output of one pipe becomes the input of the next:

```html
<!-- First trimText, then uppercase -->
<h3>{{ title() | trimText | uppercase }}</h3>
```

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 30. Custom Pipes

### What Is a Custom Pipe?

When built-in pipes don't meet your needs, you can create **custom pipes** with any transformation logic you want.

### How to Create a Custom Pipe

```bash
# Using Angular CLI
ng generate pipe my-pipe
# Shortcut
ng g p my-pipe
```

### Custom Pipe Structure

A pipe must:
1. Import `Pipe` and `PipeTransform` from `@angular/core`.
2. Use the `@Pipe` decorator with a `name`.
3. Implement the `PipeTransform` interface.
4. Define a `transform()` method.

### Example 1: Trim Text Pipe (from this project)

```typescript
// trim-text-pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimText',    // Use this name in templates
})
export class TrimTextPipe implements PipeTransform {
  // value = the input | args = optional parameters
  transform(value: string, ...args: number[]): string {
    if (args.length) {
      return value.substring(0, args[0]) + "...";  // Trim to specified length
    } else {
      return value.substring(0, 10) + "...";       // Default: trim to 10 chars
    }
  }
}
```

### Example 2: Currency Converter Pipe (from this project)

```typescript
// corrency-convertor-pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'correncyConvertor',
})
export class CorrencyConvertorPipe implements PipeTransform {
  transform(value: number, ...args: number[]): number {
    if (args.length) {
      return value * args[0];    // Multiply by custom rate
    } else {
      return value * 90;         // Default: multiply by 90 (USD to INR)
    }
  }
}
```

### Using Custom Pipes in Templates

```typescript
// pipe-testing.ts — Import custom pipes
@Component({
  imports: [CommonModule, TrimTextPipe, CorrencyConvertorPipe],
  templateUrl: './pipe-testing.html',
})
export class PipeTesting {
  title = signal("Hello World!");
  text = signal("qwertyuiopasdfghjkl");
  amount = signal(144);
}
```

```html
<!-- Trim to default 10 chars, then uppercase -->
<h3>{{ title() | trimText | uppercase }}</h3>
<!-- Output: HELLO WORL... -->

<!-- Trim to 5 chars, then titlecase -->
<h3>{{ text() | trimText:5 | titlecase }}</h3>
<!-- Output: Qwert... -->

<!-- Convert with rate 20, then format as INR -->
<h3>{{ amount() | correncyConvertor:20 | currency:'INR' }}</h3>
<!-- Output: ₹2,880.00 -->

<!-- Convert with default rate 90, then format as INR -->
<h3>{{ amount() | correncyConvertor | currency:'INR' }}</h3>
<!-- Output: ₹12,960.00 -->
```

### Passing Arguments to Pipes

```html
<!-- Syntax: value | pipeName:arg1:arg2:arg3 -->
{{ text | trimText:5 }}        <!-- Pass 5 as the first argument -->
{{ amount | correncyConvertor:20 }}  <!-- Pass 20 as the conversion rate -->
```

[🔝 Back to Table of Contents](#-table-of-contents)

---

# 📝 PHASE 10 — Forms

> _Most real applications need user input. Let's learn Angular's two approaches to building powerful, validated forms._

---

## 31. Forms in Angular

### What Are Forms?

Forms are a collection of **input fields** where users can enter data and submit it. Angular provides powerful tools for building, validating, and managing forms.

### Types of Forms in Angular

| Type | Description | Best For |
|------|-------------|----------|
| **Reactive Forms** | Form logic is defined in the component class (TypeScript) | Complex forms with dynamic controls and validation |
| **Template-Driven Forms** | Form logic is defined in the template (HTML) with directives | Simple forms with straightforward validation |

### Comparison

| Feature | Reactive Forms | Template-Driven Forms |
|---------|---------------|----------------------|
| Logic location | Component class (.ts) | Template (.html) |
| Import needed | `ReactiveFormsModule` | `FormsModule` |
| Form model | `FormControl`, `FormGroup` | `ngModel` |
| Validation | In TypeScript (programmatic) | In HTML (directive-based) |
| Testability | Easy to unit test | Harder to test |
| Scalability | Scales well for complex forms | Best for simple forms |

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 32. Reactive Forms (FormControl)

### What Is FormControl?

`FormControl` is a class that represents a **single input field** in a reactive form. It tracks the value, validation status, and user interaction state.

### Setup

```typescript
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],  // Must import
})
```

### Code Example (from this project)

```typescript
// reactive-form.ts
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
})
export class ReactiveForm {
  // Each FormControl represents one input field
  email = new FormControl("");
  password = new FormControl("");

  handleLogin() {
    console.log("Email : " + this.email.value + " Password : " + this.password.value);
  }

  handleReset() {
    this.email.setValue("");     // Reset email
    this.password.setValue("");  // Reset password
  }
}
```

```html
<!-- reactive-form.html -->
<h2>Reactive Form</h2>
<!-- Bind FormControl to input using [formControl] -->
<input type="text" placeholder="enter email" [formControl]="email">
<br><br>
<input type="password" placeholder="enter password" [formControl]="password">
<br><br>
<button (click)="handleLogin()">Login</button>
<button (click)="handleReset()">Reset</button>
```

### FormControl Methods

| Method | Purpose |
|--------|---------|
| `.value` | Get the current value |
| `.setValue("new")` | Set a new value |
| `.reset()` | Reset to initial state |
| `.valid` / `.invalid` | Check validation status |
| `.touched` / `.untouched` | Check if user has interacted |

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 33. Form Grouping (FormGroup)

### What Is FormGroup?

`FormGroup` groups multiple `FormControl` instances together into a single form object. This makes it easier to manage, validate, and submit the entire form as one unit.

### Why Use FormGroup?

- Manage all form controls in a single object.
- Validate the entire form at once.
- Submit all values together.

### Code Example (from this project)

```typescript
// form-grouping.ts
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-grouping',
  imports: [ReactiveFormsModule],
  templateUrl: './form-grouping.html',
})
export class FormGrouping {
  // FormGroup containing multiple FormControls with validators
  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  // Getter shortcuts for easy access in template
  get name() { return this.loginForm.get("name"); }
  get email() { return this.loginForm.get("email"); }
  get password() { return this.loginForm.get("password"); }

  handleProfile() {
    console.log(this.loginForm.value);
    // Output: { name: "Kartik", email: "k@test.com", password: "12345" }
  }
}
```

```html
<!-- form-grouping.html -->
<h1>Form Group</h1>
<form [formGroup]="loginForm" (ngSubmit)="handleProfile()">
  <input type="text" formControlName="name" placeholder="Enter name">
  @if (name?.hasError('required') && name?.touched) {
    <span class="error">Name field is required!</span>
  }
  @if (name?.errors?.['maxlength'] && name?.touched) {
    <span class="error">Name is invalid!</span>
  }

  <br><br>
  <input type="text" formControlName="email" placeholder="Enter email">
  @if (email?.hasError('required') && email?.touched) {
    <span class="error">Email is required!</span>
  }
  @if (email?.errors?.['email'] && email?.touched) {
    <span class="error">Email is invalid!</span>
  }

  <br><br>
  <input type="password" formControlName="password" placeholder="Enter password">
  @if (password?.hasError('required') && password?.touched) {
    <span class="error">Password is required!</span>
  }
  @if (password?.errors?.['minlength'] && password?.touched) {
    <span class="error">Password is invalid!</span>
  }

  <br><br>
  <!-- Disable button when form is invalid -->
  <button [disabled]="loginForm.invalid" type="submit">Submit</button>
</form>
```

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 34. Reactive Forms Validation

### Built-in Validators

| Validator | Purpose | Example |
|-----------|---------|---------|
| `Validators.required` | Field must not be empty | `new FormControl('', [Validators.required])` |
| `Validators.email` | Must be a valid email | `new FormControl('', [Validators.email])` |
| `Validators.minLength(n)` | Minimum character length | `Validators.minLength(5)` |
| `Validators.maxLength(n)` | Maximum character length | `Validators.maxLength(20)` |
| `Validators.min(n)` | Minimum numeric value | `Validators.min(18)` |
| `Validators.max(n)` | Maximum numeric value | `Validators.max(100)` |
| `Validators.pattern(regex)` | Must match regex pattern | `Validators.pattern('[a-zA-Z]*')` |

### Checking Validation State

```typescript
// In component
get email() { return this.loginForm.get("email"); }
```

```html
<!-- In template -->
@if (email?.hasError('required') && email?.touched) {
  <span class="error">Email is required!</span>
}
@if (email?.errors?.['email'] && email?.touched) {
  <span class="error">Enter a valid email!</span>
}
```

### Signal-Based Form Validation (Angular 21+)

Angular 21 introduces a new signal-based form API:

```typescript
// form-signal.ts
import { form, FormField, required, email, minLength, maxLength } from '@angular/forms/signals';

export class FormSignal {
  loginModel = signal({
    email: '',
    password: ''
  });

  loginForm = form(this.loginModel, (field) => {
    required(field.email, { message: "Email is required!" });
    email(field.email, { message: "Enter valid email!" });
    required(field.password, { message: "Password is required!" });
    minLength(field.password, 5, { message: "Enter valid password!" });
    maxLength(field.password, 10, { message: "Enter valid password!" });
  });

  login() {
    console.log(this.loginForm.email().value());
    console.log(this.loginForm.password().value());
  }

  reset() {
    this.loginForm.email().value.set('');
    this.loginForm.password().value.set('');
  }
}
```

```html
<!-- form-signal.html -->
<h2>Form with Signal</h2>
<input type="text" placeholder="Enter email" [formField]="loginForm.email">
@if (loginForm.email().touched() && loginForm.email().invalid()) {
  <ul>
    @for (error of loginForm.email().errors(); track error) {
      <li>{{ error.message }}</li>
    }
  </ul>
}

<br><br>
<input type="password" placeholder="Enter password" [formField]="loginForm.password">
@if (loginForm.password().touched() && loginForm.password().invalid()) {
  <ul>
    @for (error of loginForm.password().errors(); track error) {
      <li>{{ error.message }}</li>
    }
  </ul>
}

<br><br>
<button [disabled]="loginForm().invalid()" (click)="login()">Login</button>
<button (click)="reset()">Reset</button>
```

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 35. Template-Driven Forms

### What Are Template-Driven Forms?

In template-driven forms, the form logic is defined **directly in the HTML template** using directives like `ngModel`, `ngForm`, and HTML validation attributes. Angular automatically creates `FormControl` and `FormGroup` objects behind the scenes.

### Why Use Template-Driven Forms?

- Quick to build for simple forms.
- Less TypeScript code — most logic is in the template.
- Familiar syntax for developers coming from HTML/jQuery.

### When to Use

- Simple login/signup forms.
- Contact forms.
- Forms with 3-5 fields and basic validation.

### Code Example (from this project)

```typescript
// template-form.ts
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule],   // Required for template-driven forms
  templateUrl: './template-form.html',
})
export class TemplateForm {
  userDetails: any = undefined;

  addUser(data: NgForm) {
    console.log(data);
    this.userDetails = data;
  }

  reset(form: NgForm) {
    form.reset();
    this.userDetails = undefined;
  }
}
```

```html
<!-- template-form.html -->
<h2>Template Driven Form</h2>
<div style="display: flex; gap: 20px;">
  <div>
    <!-- #userForm creates a template reference to NgForm -->
    <form #userForm="ngForm" (ngSubmit)="addUser(userForm.value)">
      <!-- ngModel binds each input to the form model -->
      <input type="text" name="userName" placeholder="Enter name" ngModel />
      <br /><br />
      <input type="password" name="password" placeholder="Enter password" ngModel />
      <br /><br />
      <select name="gender" ngModel>
        <option value="">select gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <br /><br />
      <input type="range" name="range" ngModel />
      <br /><br />
      <textarea name="userBio" placeholder="Enter bio" ngModel></textarea>
      <br /><br />
      <button type="submit">Add User</button>
      <button type="button" (click)="reset(userForm)">Reset</button>
    </form>
  </div>
  <div>
    <!-- Display submitted data -->
    <ul style="list-style: none;">
      <li>Name :- {{ userDetails?.userName }}</li>
      <li>Password :- {{ userDetails?.password }}</li>
      <li>Gender :- {{ userDetails?.gender }}</li>
      <li>Range :- {{ userDetails?.range }}</li>
      <li>Bio :- {{ userDetails?.userBio }}</li>
    </ul>
  </div>
</div>
```

### Key Template-Driven Form Concepts

| Concept | Purpose |
|---------|---------|
| `#formRef="ngForm"` | Creates a reference to the entire form object |
| `ngModel` | Marks an input as part of the form model |
| `name="fieldName"` | Required — Angular uses the `name` attribute as the key |
| `(ngSubmit)="fn()"` | Triggered when the form is submitted |
| `formRef.value` | Object containing all form values: `{ userName: "...", password: "..." }` |
| `formRef.reset()` | Reset all fields to their initial state |

[🔝 Back to Table of Contents](#-table-of-contents)

---

# 🧭 PHASE 11 — Routing & Navigation

> _Your app has multiple features now. Routing lets you organize them into **pages** that users can navigate between._

---

## 36. Routing in Angular

### What Is Routing?

Routing enables **navigation between different views/pages** in a Single Page Application without full page reloads. Angular's Router module maps URL paths to components.

### Why Use Routing?

- SPAs need a way to show different content for different URLs.
- Users can navigate using the browser's address bar, back/forward buttons, and links.
- Enables bookmarking and sharing specific pages.

### How to Set Up

**Step 1:** Define routes in `app.routes.ts`:

```typescript
// app.routes.ts
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Login } from './pages/login/login';

export const routes: Routes = [
  { path: "",        component: Home },     // Default route (home page)
  { path: "about",   component: About },    // /about
  { path: "contact", component: Contact },  // /contact
  { path: "login",   component: Login },    // /login
];
```

**Step 2:** Provide the router in `app.config.ts`:

```typescript
// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)    // Register routes
  ]
};
```

**Step 3:** Add `<router-outlet>` in the template:

```html
<!-- app.html -->
<app-header></app-header>

<!-- This is where routed components will be rendered -->
<router-outlet></router-outlet>
```

### How Routing Works

1. User navigates to `/about`.
2. Angular Router checks `app.routes.ts` for a matching path.
3. Finds `{ path: "about", component: About }`.
4. Renders the `About` component inside `<router-outlet>`.
5. No full page reload — only the content inside `<router-outlet>` changes.

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 37. Header Component with Router

### Creating a Navigation Header

```typescript
// header.ts
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],  // Import router directives
  templateUrl: './header.html',
})
export class Header {}
```

```html
<!-- header.html -->
<div class="header">
  <div class="logo">Logo</div>
  <div class="navbar">
    <ul class="navbarList">
      <!-- routerLink: navigate without page reload -->
      <!-- routerLinkActive: adds CSS class to active link -->
      <li>
        <a routerLinkActive="active"
           [routerLinkActiveOptions]="{ exact: true }"
           routerLink="/">Home</a>
      </li>
      <li><a routerLinkActive="active" routerLink="/about">About</a></li>
      <li><a routerLinkActive="active" routerLink="/contact">Contact</a></li>
      <li><a routerLinkActive="active" routerLink="/login">Login</a></li>
      <li><a routerLinkActive="active" routerLink="/users">Users</a></li>
    </ul>
  </div>
</div>
```

### Key Concepts

| Directive | Purpose |
|-----------|---------|
| `routerLink="/path"` | Navigate to a route without page reload (like `<a href>` but for SPA) |
| `routerLinkActive="class"` | Adds the CSS class to the element when its route is active |
| `[routerLinkActiveOptions]="{ exact: true }"` | Only marks as active for exact URL match (prevents `/` matching everything) |

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 38. 404 Page & Redirection

### Wildcard Route (404 Page)

The wildcard route `**` catches any URL that doesn't match any defined route:

```typescript
// app.routes.ts
export const routes: Routes = [
  { path: "",        component: Home },
  { path: "about",   component: About },
  // ... other routes

  // ⚠️ Wildcard route MUST be the last route
  { path: "**",      component: PageNotFound }  // 404 page
];
```

```typescript
// page-not-found.ts
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  imports: [RouterLink],
  templateUrl: './page-not-found.html',
})
export class PageNotFound {}
```

```html
<!-- page-not-found.html -->
<h1>404 — Page Not Found</h1>
<p>The page you're looking for doesn't exist.</p>
<a routerLink="/">Go back to Home</a>
```

### Redirection

Instead of showing a 404 page, you can redirect to the home page:

```typescript
// Redirect unknown routes to home page
{ path: "**", redirectTo: "" }
```

> **Important:** The wildcard route `**` must always be the **last route** in the array. Routes are matched from top to bottom, and `**` matches everything.

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 39. Query Params

### What Are Query Params?

Query parameters are **key-value pairs** appended to the URL after a `?`. They are used to pass optional data between routes.

```
/about?id=3&name=Vivek&age=25
```

### Sending Query Params

**From Template:**

```html
<a [routerLink]="['/about']" [queryParams]="{ id: 1, name: 'Kartik' }">
  Go to About
</a>
```

**From Component (Programmatic):**

```typescript
// home.ts
constructor(public router: Router) {}

goToProfile() {
  this.router.navigate(['about'], {
    queryParams: {
      id: 3,
      name: 'Vivek',
      age: 25
    }
  });
}
```

### Reading Query Params

```typescript
// about.ts
import { ActivatedRoute } from '@angular/router';

export class About {
  id = signal(0);
  name = signal('');
  age = signal(0);

  constructor(public route: ActivatedRoute) {}

  ngOnInit() {
    // Subscribe to query parameters
    this.route.queryParams.subscribe((params) => {
      this.id.set(params['id']);
      this.name.set(params['name']);
      this.age.set(params['age']);
    });
  }
}
```

```html
<!-- about.html -->
<h1>About Page</h1>
<ul>
  <li>Id : {{ id() }}</li>
  <li>Name : {{ name() }}</li>
  <li>Age : {{ age() }}</li>
</ul>
```

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 40. Route Params

### What Are Route Params?

Route parameters are **dynamic segments** in the URL path itself. Unlike query params, they are part of the URL structure and defined in the route configuration.

```
/contact/Vivek        ← "Vivek" is the route param
/user-details/5       ← "5" is the route param
```

### Defining Route Params

```typescript
// app.routes.ts
export const routes: Routes = [
  { path: "contact/:name", component: Contact },     // :name is a route param
  { path: "user-details/:id", component: UserDetails } // :id is a route param
];
```

### Sending Route Params

**From Template:**

```html
<a [routerLink]="['/user-details', user.id]">{{ user.name }}</a>
```

**From Component (Programmatic):**

```typescript
goToContact() {
  this.router.navigate(['contact', 'Vivek']);
}
```

### Reading Route Params

```typescript
// contact.ts
import { ActivatedRoute } from '@angular/router';

export class Contact {
  name = signal('');

  constructor(public route: ActivatedRoute) {}

  ngOnInit() {
    // Subscribe to route parameters
    this.route.params.subscribe((params) => {
      this.name.set(params['name']);
    });
  }
}
```

### Query Params vs Route Params

| Feature | Query Params | Route Params |
|---------|-------------|--------------|
| URL format | `/about?id=3&name=Vivek` | `/contact/Vivek` |
| Optional? | Yes (can be omitted) | No (required in URL) |
| Defined in | Navigation call | Route configuration (`:param`) |
| Use case | Filters, search queries | Resource identifiers (ID, slug) |

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 41. Dynamic Routing

### What Is Dynamic Routing?

Dynamic routing uses **route parameters** to load different data based on the URL. For example, clicking on a user in a list navigates to their detail page using their ID.

### Code Example (from this project)

**Users List Page:**

```typescript
// users.ts
export class Users {
  userData: any = signal('');
  constructor(public userService: UserService) {}

  ngOnInit() {
    const data = this.userService.userList();
    this.userData.set(data);
  }
}
```

```html
<!-- users.html -->
<h1>Users List</h1>
<ul>
  @for (user of userData(); track user.id) {
    <!-- Dynamic link: navigates to /user-details/1, /user-details/2, etc. -->
    <li><a [routerLink]="['/user-details', user.id]">{{ user.name }}</a></li>
  }
</ul>
```

**User Details Page:**

```typescript
// user-details.ts
export class UserDetails {
  userData: any = signal('');
  constructor(public userDetail: UserService, public route: ActivatedRoute) {}

  ngOnInit() {
    const data = this.userDetail.userList();
    // Read the :id route param and filter the user
    this.route.params.subscribe((params) => {
      const filteredData = data.filter((item) => item.id == params['id']);
      this.userData.set(filteredData[0]);
    });
  }
}
```

### Flow

1. User list shows all users with links like `/user-details/1`, `/user-details/2`.
2. When user clicks "Kartik" → navigates to `/user-details/1`.
3. `UserDetails` component reads `params['id']` → gets `1`.
4. Filters the data to show only Kartik's details.

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 42. Nested / Child Routing

### What Is Nested Routing?

Nested (child) routing allows you to **render child components inside a parent component's `<router-outlet>`**. This creates a nested layout where the parent stays visible while child content changes.

### When to Use

- Dashboard layouts with sidebar + content area.
- User profile with tabs (Profile, Settings, Activity).
- Any page that has sub-navigation.

### Route Configuration

```typescript
// app.routes.ts
export const routes: Routes = [
  { path: "", component: Home },
  {
    path: "user",
    component: User,
    children: [                    // Child routes nested under /user
      { path: "profile", component: Profile },   // /user/profile
      { path: "setting", component: Setting },   // /user/setting
    ]
  }
];
```

### Parent Component (User)

```typescript
// user.ts
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user.html',
})
export class User {}
```

```html
<!-- user.html -->
<h2>User Page</h2>
<nav>
  <a routerLink="profile">Profile</a>
  <a routerLink="setting">Setting</a>
</nav>

<!-- Child components render here -->
<router-outlet></router-outlet>
```

### How It Works

```
URL: /user/profile

┌─────────────────────────────┐
│ App Component               │
│ ┌─────────────────────────┐ │
│ │ <router-outlet>         │ │
│ │ ┌─────────────────────┐ │ │
│ │ │ User Component      │ │ │
│ │ │ [Profile] [Setting] │ │ │
│ │ │ ┌─────────────────┐ │ │ │
│ │ │ │ <router-outlet> │ │ │ │
│ │ │ │ Profile Component│ │ │ │
│ │ │ └─────────────────┘ │ │ │
│ │ └─────────────────────┘ │ │
│ └─────────────────────────┘ │
└─────────────────────────────┘
```

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 43. Lazy Loading with Routing

### What Is Lazy Loading?

Lazy loading means **loading a component or module only when the user navigates to its route**, instead of loading everything upfront. This reduces the initial bundle size and makes the app load faster.

### Why Use Lazy Loading?

- **Faster initial load:** Only the home page loads initially.
- **Smaller bundles:** Each lazy-loaded route creates a separate JS chunk.
- **Better performance:** Users don't download code they never use.

### How to Implement

```typescript
// app.routes.ts — Lazy loaded routes
export const routes: Routes = [
  { path: "", component: Home },
  {
    path: "user",
    // loadComponent instead of component — loads only when user navigates here
    loadComponent: () => import('./nestedRouting/pages/user/user').then((c) => c.User),
    children: [
      {
        path: "profile",
        loadComponent: () => import('./nestedRouting/pages/profile/profile').then((c) => c.Profile)
      },
      {
        path: "setting",
        loadComponent: () => import('./nestedRouting/pages/setting/setting').then((c) => c.Setting)
      }
    ]
  }
];
```

### Before vs After Lazy Loading

| Without Lazy Loading | With Lazy Loading |
|---------------------|-------------------|
| All components loaded at startup | Components loaded on demand |
| Single large JS bundle | Multiple smaller JS chunks |
| Slower initial load | Faster initial load |
| `component: UserComponent` | `loadComponent: () => import(...)` |

### What Happens Internally?

1. On app start, only the routes without `loadComponent` are bundled.
2. When user navigates to `/user`, Angular makes a network request for the user chunk.
3. The chunk loads and the component renders.
4. Subsequent visits to the same route use the cached chunk (no re-download).

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 44. Load Component Dynamically

### What Is Dynamic Component Loading?

Dynamic component loading means **programmatically loading and rendering a component at runtime** — triggered by a user action (like clicking a button) instead of by a route change.

### Why Use It?

- Load components conditionally (e.g., based on user role or feature flags).
- Create plugin-like architectures.
- Reduce initial load by loading heavy components only when needed.

### How It Works

Uses `ViewContainerRef` to dynamically insert components into a container element:

```typescript
// dynamic-component.ts
import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.html',
})
export class DynamicComponent {
  // Reference to the container element
  @ViewChild("container", { read: ViewContainerRef })
  container!: ViewContainerRef;

  async handleUserDetails() {
    this.container.clear();  // Remove any previously loaded component

    // Dynamically import and create the component
    const { Home } = await import('../pages/home/home');
    this.container.createComponent(Home);
  }
}
```

```html
<!-- dynamic-component.html -->
<h1>User all Details</h1>
<button (click)="handleUserDetails()">Load user details</button>

<!-- The dynamically loaded component appears here -->
<ng-container #container></ng-container>
```

### Key Concepts

| Concept | Purpose |
|---------|---------|
| `@ViewChild` | Gets a reference to a template element |
| `ViewContainerRef` | A container that can hold dynamically created components |
| `container.clear()` | Removes all previously created components from the container |
| `container.createComponent()` | Creates and inserts a component into the container |
| `await import()` | JavaScript dynamic import — loads the code on demand |

[🔝 Back to Table of Contents](#-table-of-contents)

---

# 🌐 PHASE 12 — Services & API Integration

> _Your app works with local data. Now let's connect it to the **real world** — fetching, creating, updating, and deleting data from servers._

---

## 45. Services in Angular

### What Is a Service?

A **service** is a reusable class that encapsulates **shared logic, data, or functionality** that can be used across multiple components. Services handle things like API calls, data management, business logic, and state management.

### Why Use Services?

- **Separation of concerns:** Components handle the UI; services handle the logic.
- **Reusability:** One service can be used by many components.
- **Singleton pattern:** `providedIn: 'root'` creates a single instance shared across the app.
- **Testability:** Services are easy to unit test.

### What If Services Didn't Exist?

- Every component would contain its own API call logic (code duplication).
- Sharing data between unrelated components would be nearly impossible.
- The app would become hard to maintain and test.

### Creating a Service

```bash
# Using Angular CLI
ng generate service services/product-service
# Shortcut
ng g s services/product-service
```

### Code Example (from this project)

```typescript
// services/product-service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',   // Makes it available app-wide as a singleton
})
export class ProductService {
  constructor() {
    console.log("Product Service Called");
  }

  getProduct() {
    return [
      { id: 1, name: 'Mobile', price: 10000 },
      { id: 2, name: 'Laptop', price: 20000 },
      { id: 3, name: 'PC', price: 30000 },
      { id: 4, name: 'AC', price: 40000 },
    ];
  }
}
```

### Using a Service in a Component

```typescript
// products.ts
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-products',
})
export class Products {
  productData: any = signal("");

  // Angular's Dependency Injection provides the service instance
  constructor(private productService: ProductService) {}

  ngOnInit() {
    let data = this.productService.getProduct();
    this.productData.set(data);
  }
}
```

### Dependency Injection (DI)

Angular uses **Dependency Injection** to provide service instances to components:

1. You define the service with `@Injectable()`.
2. Angular creates a single instance (because `providedIn: 'root'`).
3. When a component's constructor asks for the service, Angular injects it automatically.

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 46. API Integration (HttpClient)

### What Is API Integration?

Connecting your Angular app to an **external HTTP API** to fetch, send, update, or delete data from a server.

### Setup — HttpClient

Angular uses `HttpClient` from `@angular/common/http` for making HTTP requests.

**Step 1:** Provide HttpClient in `app.config.ts`:

```typescript
// app.config.ts
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient()   // Enable HttpClient across the app
  ]
};
```

**Step 2:** Create a service that uses HttpClient:

```typescript
// services/product-api-service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductsApiResponse } from './productDataType';

@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  apiURL = "https://dummyjson.com/products";

  constructor(private http: HttpClient) {}

  getProducts() {
    // Returns an Observable — use .subscribe() to get the data
    return this.http.get<ProductsApiResponse>(this.apiURL);
  }
}
```

**Step 3:** Use the service in a component:

```typescript
// products.ts
export class Products {
  productApiData = signal<Product[] | undefined>(undefined);

  constructor(private productApiService: ProductApiService) {}

  ngOnInit() {
    // Subscribe to the Observable to receive the data
    this.productApiService.getProducts().subscribe((data) => {
      console.log(data.products);
      this.productApiData.set(data.products);
    });
  }
}
```

```html
<!-- products.html -->
<h2>Product API List</h2>
<ul>
  @for (product of productApiData(); track product.id) {
    <ul>
      <li>Name : {{ product.title }}</li>
      <li>Category : {{ product.category }}</li>
      <li>Price : {{ product.price }}</li>
      <button><a [routerLink]="['/details', product.id]">Show Product</a></button>
    </ul>
  }
</ul>
```

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 47. Define Interface for API

### What Is an Interface?

An **interface** defines the **shape (structure)** of an object. It specifies what properties an object must have and what types those properties should be.

### Why Define Interfaces for APIs?

- **Type safety:** TypeScript catches errors if the API response doesn't match the expected structure.
- **Autocompletion:** Your IDE knows exactly what properties are available.
- **Documentation:** Interfaces document what the API returns.

### Interface vs Type

| Feature | `interface` | `type` |
|---------|------------|--------|
| **Primary use** | Define object shapes | Define any kind of type |
| **Declaration merging** | ✅ Supports merging (can extend across files) | ❌ Cannot merge |
| **Extends** | ✅ `interface B extends A` | ✅ `type B = A & { ... }` |
| **Union types** | ❌ Not supported | ✅ `type ID = string \| number` |
| **Flexibility** | Objects and classes | Objects, primitives, unions, tuples |

### Code Example (from this project)

**Product Interface:**

```typescript
// services/productDataType.ts
export interface ProductsApiResponse {
  products: Product[];        // API returns an array of Product objects
}

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: string;
}
```

**User Interface:**

```typescript
// services/userDataType.ts
export interface users {
  id?: number;       // Optional (? means this field may not exist)
  name: string;
  age: number;
  email: string;
}
```

### Using Interfaces with HttpClient

```typescript
// Type the HTTP response for auto-completion and type safety
getProducts() {
  return this.http.get<ProductsApiResponse>(this.apiURL);
  //                 ^^^^^^^^^^^^^^^^^^ — TypeScript now knows the response shape
}

getUsers() {
  return this.http.get<users[]>(this.url);
  //                 ^^^^^^^^^ — Array of user objects
}
```

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 48. Dynamic Routing with API

### Combining Dynamic Routes with API Data

Navigate to a product detail page using the product's ID from the API:

```typescript
// products-details.ts
import { ActivatedRoute } from '@angular/router';
import { ProductApiService } from '../../services/product-api-service';

export class ProductsDetails {
  productApiData = signal<Product | undefined>(undefined);

  constructor(
    private route: ActivatedRoute,
    private product: ProductApiService
  ) {}

  ngOnInit() {
    // Get the :id parameter from the URL
    let productId = this.route.snapshot.paramMap.get('id');

    // Fetch products from API and filter by ID
    this.product.getProducts().subscribe((data) => {
      data.products.filter((item) => {
        if (item.id.toString() == productId) {
          this.productApiData.set(item);
        }
      });
    });
  }
}
```

```html
<!-- products-details.html -->
<h2>Product : {{ productApiData()?.title }}</h2>
<ul>
  <li>Description : {{ productApiData()?.description }}</li>
  <li>Price : {{ productApiData()?.price }}</li>
  <li>Category : {{ productApiData()?.category }}</li>
</ul>
```

### Route Configuration

```typescript
{ path: "",           component: Products },
{ path: "details/:id", component: ProductsDetails }
```

### Flow

1. Products page loads data from the external API.
2. Each product has a "Show Product" button with a dynamic link: `/details/1`.
3. Clicking it navigates to `ProductsDetails`, which reads the `:id` param.
4. The detail component fetches the API data and filters for the specific product.

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 49. JSON Server API

### What Is JSON Server?

**JSON Server** is a tool that creates a **fake REST API** from a simple JSON file. It's perfect for frontend development when the backend isn't ready yet.

### Why Use JSON Server?

- No need to build a real backend for learning/prototyping.
- Supports full CRUD operations (GET, POST, PUT, DELETE).
- Data persists in the JSON file.
- Setup takes less than 1 minute.

### Setup

**Step 1:** Install JSON Server:

```bash
mkdir API
cd API
npm init -y
npm install json-server
```

**Step 2:** Create `db.json`:

```json
{
  "users": [
    {
      "name": "Kartik Ahir",
      "age": 22,
      "email": "kartik@test.com",
      "id": "1"
    },
    {
      "name": "Rahul Patel",
      "age": 65,
      "email": "rahul@test123.com",
      "id": "2"
    }
  ]
}
```

**Step 3:** Start the server:

```bash
npx json-server db.json
# API runs at http://localhost:3000
```

### Available Endpoints (Automatic)

| Method | URL | Action |
|--------|-----|--------|
| `GET` | `/users` | Get all users |
| `GET` | `/users/1` | Get user with id 1 |
| `POST` | `/users` | Add a new user |
| `PUT` | `/users/1` | Update user with id 1 |
| `DELETE` | `/users/1` | Delete user with id 1 |

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 50. Integrate JSON Server Users API (GET)

### Service for JSON Server CRUD

```typescript
// services/user-json-service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { users } from './userDataType';

@Injectable({
  providedIn: 'root',
})
export class UserJsonService {
  url = "http://localhost:3000/users";

  constructor(private http: HttpClient) {}

  // GET all users
  getUsers() {
    return this.http.get<users[]>(this.url);
  }

  // GET single user by id
  getUser(id: string) {
    return this.http.get<users>(`${this.url}/${id}`);
  }

  // POST — add new user
  addUser(data: users) {
    return this.http.post<users>(this.url, data);
  }

  // DELETE — remove user
  deleteUser(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  // PUT — update user
  editUser(id: string, data: users) {
    return this.http.put(`${this.url}/${data.id}`, data);
  }
}
```

### User List Component (GET all users)

```typescript
// user-list.ts
export class UserList {
  userData = signal<users[] | undefined>(undefined);

  constructor(private userService: UserJsonService, private router: Router) {}

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.userService.getUsers().subscribe((data) => {
      this.userData.set(data);
    });
  }

  deleteUser(id: number | undefined) {
    if (id) {
      this.userService.deleteUser(id).subscribe((res) => {
        if (res) {
          this.getUser();  // Refresh list after deletion
        }
      });
    }
  }

  editUser(id: number | undefined) {
    this.router.navigate(['/edit', id]);
  }
}
```

```html
<!-- user-list.html -->
<h2>User List</h2>
<ul style="display: flex; flex-wrap: wrap; gap: 10px">
  @for (user of userData(); track user.id) {
    <div style="border: 1px solid black; padding: 10px; width: 315px;">
      <ul style="list-style: none">
        <li>Id : {{ user.id }}</li>
        <li>Name : {{ user.name }}</li>
        <li>Age : {{ user.age }}</li>
        <li>Email : {{ user.email }}</li>
      </ul>
      <div>
        <button (click)="deleteUser(user.id)">Delete</button>
        <button (click)="editUser(user.id)">Edit</button>
      </div>
    </div>
  }
</ul>
```

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 51. POST API in Angular

### Adding New Data to the Server

```typescript
// add-user.ts
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { UserJsonService } from '../../services/user-json-service';
import { users } from '../../services/userDataType';
import { Router } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule],
})
export class AddUser {
  name = new FormControl('');
  age = new FormControl('');
  email = new FormControl('');

  constructor(private userService: UserJsonService, private router: Router) {}

  addUser() {
    let name = this.name.value;
    let age = this.age.value;
    let email = this.email.value;

    if (name && age && email) {
      let data: users = {
        name: name,
        age: Number(age),
        email: email
      };

      // POST request to add new user
      this.userService.addUser(data).subscribe((res) => {
        if (res) {
          this.router.navigate(['/']);  // Navigate back to user list
        }
      });
    }
  }
}
```

```html
<!-- add-user.html -->
<h2>Add New User</h2>
<div>
  <input type="text" placeholder="Enter name" [formControl]="name">
  <br><br>
  <input type="text" placeholder="Enter age" [formControl]="age">
  <br><br>
  <input type="text" placeholder="Enter email" [formControl]="email">
  <br><br>
  <button (click)="addUser()">Add User</button>
</div>
```

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 52. DELETE API in Angular

### Removing Data from the Server

```typescript
// In the user-json-service.ts
deleteUser(id: number) {
  return this.http.delete(`${this.url}/${id}`);
}
```

```typescript
// In the user-list component
deleteUser(id: number | undefined) {
  if (id) {
    this.userService.deleteUser(id).subscribe((res) => {
      if (res) {
        this.getUser();  // Refresh the list after successful deletion
      }
    });
  }
}
```

```html
<!-- In the template -->
<button (click)="deleteUser(user.id)">Delete</button>
```

### How It Works

1. User clicks the "Delete" button.
2. The component calls `deleteUser(id)` on the service.
3. The service sends a `DELETE` request to `http://localhost:3000/users/{id}`.
4. JSON Server removes the user from `db.json`.
5. The component refreshes the list by calling `getUser()` again.

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 53. Populate Form Data Using API (GET by ID)

### Pre-filling a Form with Existing Data

When editing a user, you need to load their existing data into the form first:

```typescript
// edit-user.ts
export class EditUser {
  name = new FormControl('');
  age = new FormControl('');
  email = new FormControl('');

  constructor(
    private activeRoute: ActivatedRoute,
    private userService: UserJsonService,
    private router: Router
  ) {}

  ngOnInit() {
    // Get the user ID from the URL
    let id = this.activeRoute.snapshot.paramMap.get('id');
    if (id) {
      // Fetch the user data and pre-fill the form
      this.userService.getUser(id).subscribe((res) => {
        this.name.setValue(res.name);
        this.age.setValue(res.age.toString());
        this.email.setValue(res.email);
      });
    }
  }
}
```

```html
<!-- edit-user.html -->
<h2>Edit User</h2>
<div>
  <!-- The form fields are pre-filled with existing data -->
  <input type="text" placeholder="Enter name" [formControl]="name">
  <br><br>
  <input type="text" placeholder="Enter age" [formControl]="age">
  <br><br>
  <input type="text" placeholder="Enter email" [formControl]="email">
  <br><br>
  <button (click)="editUser()">Update User</button>
</div>
```

### Flow

1. User clicks "Edit" on a user card → navigates to `/edit/3`.
2. `EditUser` component reads `params['id']` → gets `3`.
3. Calls `userService.getUser('3')` → API returns the user data.
4. `setValue()` fills each form field with the existing values.
5. User modifies the data and clicks "Update".

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 54. Update Data Using PUT API

### Sending Updated Data to the Server

```typescript
// In the user-json-service.ts
editUser(id: string, data: users) {
  return this.http.put(`${this.url}/${data.id}`, data);
}
```

```typescript
// In edit-user.ts
editUser() {
  let name = this.name.value;
  let age = this.age.value;
  let email = this.email.value;
  let id = this.activeRoute.snapshot.paramMap.get('id');

  if (name && age && email && id) {
    let data: users = {
      name: name,
      age: Number(age),
      email: email,
      id: Number(id)
    };

    // PUT request to update the user
    this.userService.editUser(id, data).subscribe((res) => {
      if (res) {
        this.router.navigate(['/']);  // Navigate back to user list
      }
    });
  }
}
```

### Complete CRUD Summary

| Operation | HTTP Method | Service Method | API Endpoint |
|-----------|------------|----------------|--------------|
| **Create** | `POST` | `addUser(data)` | `POST /users` |
| **Read All** | `GET` | `getUsers()` | `GET /users` |
| **Read One** | `GET` | `getUser(id)` | `GET /users/:id` |
| **Update** | `PUT` | `editUser(id, data)` | `PUT /users/:id` |
| **Delete** | `DELETE` | `deleteUser(id)` | `DELETE /users/:id` |

[🔝 Back to Table of Contents](#-table-of-contents)

---

# 🎯 PHASE 13 — Styling Libraries & Deployment

> _Your app is fully functional. Let's make it beautiful with styling libraries and deploy it to the world._

---

## 55. Tailwind CSS in Angular

### What Is Tailwind CSS?

**Tailwind CSS** is a utility-first CSS framework that provides pre-built utility classes (like `text-center`, `bg-blue-500`, `p-4`) instead of pre-designed components. You build custom designs directly in your HTML.

### Why Use Tailwind?

- No custom CSS needed for most styling.
- Consistent design system.
- Rapid prototyping.
- Responsive design is built in (`md:`, `lg:`, etc.).

### Setup in Angular

```bash
# Step 1: Install Tailwind CSS
npm install tailwindcss @tailwindcss/postcss postcss

# Step 2: Initialize Tailwind config
npx tailwindcss init
```

**Step 3:** Configure PostCSS (`.postcssrc.json`):

```json
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
```

**Step 4:** Add Tailwind to your global CSS (`src/styles.css`):

```css
@import "tailwindcss";
```

### Example Usage

```html
<div class="bg-gray-100 p-6 rounded-lg shadow-md">
  <h1 class="text-2xl font-bold text-blue-600">Hello Angular</h1>
  <p class="text-gray-700 mt-2">Styled with Tailwind CSS</p>
  <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4">
    Click Me
  </button>
</div>
```

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 56. Material UI in Angular

### What Is Angular Material?

**Angular Material** is a UI component library built by the Angular team. It provides pre-built, accessible, and well-tested UI components following Google's Material Design guidelines.

### Why Use Angular Material?

- Production-ready components (buttons, dialogs, tables, forms, etc.).
- Built-in accessibility (A11y).
- Consistent design language.
- Official support from the Angular team.

### Setup

```bash
# Install Angular Material
ng add @angular/material

# During installation, you'll be asked:
# ? Choose a prebuilt theme → e.g., Indigo/Pink
# ? Set up global Angular Material typography styles? → Yes
# ? Include Angular animations module? → Yes
```

### Example Usage

```typescript
// Import individual components
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

@Component({
  imports: [MatButtonModule, MatInputModule, MatCardModule],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Login</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <mat-form-field>
          <input matInput placeholder="Email">
        </mat-form-field>
        <mat-form-field>
          <input matInput type="password" placeholder="Password">
        </mat-form-field>
      </mat-card-content>
      <mat-card-actions>
        <button mat-raised-button color="primary">Login</button>
      </mat-card-actions>
    </mat-card>
  `
})
```

### Common Angular Material Components

| Component | Import | Purpose |
|-----------|--------|---------|
| `MatButtonModule` | `@angular/material/button` | Buttons |
| `MatInputModule` | `@angular/material/input` | Input fields |
| `MatCardModule` | `@angular/material/card` | Card containers |
| `MatTableModule` | `@angular/material/table` | Data tables |
| `MatDialogModule` | `@angular/material/dialog` | Modal dialogs |
| `MatToolbarModule` | `@angular/material/toolbar` | Toolbars |
| `MatIconModule` | `@angular/material/icon` | Material icons |
| `MatSnackBarModule` | `@angular/material/snack-bar` | Toast notifications |

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 57. Angular Production Build

### What Is a Production Build?

A **production build** optimizes your Angular application for deployment. It minifies code, removes unused code (tree shaking), compiles templates ahead of time (AOT), and generates hashed filenames for cache busting.

### Why Build for Production?

| Development | Production |
|-------------|-----------|
| Large bundle size | Minified & compressed |
| Source maps included | No source maps (secure) |
| Debugging enabled | Optimized for speed |
| No cache busting | Hashed filenames for caching |

### How to Create a Production Build

```bash
# Create production build
ng build

# Or explicitly specify production configuration
ng build --configuration production
```

### Output

The build generates optimized files in the `dist/` folder:

```
dist/
└── angular-tutorial/
    └── browser/
        ├── index.html         # Entry point
        ├── main-abc123.js     # Application code (minified)
        ├── polyfills-xyz.js   # Browser compatibility code
        ├── styles-def456.css  # Compiled & minified CSS
        └── assets/            # Static files
```

### Build Configurations (angular.json)

```json
"configurations": {
  "production": {
    "budgets": [
      {
        "type": "initial",
        "maximumWarning": "500kB",
        "maximumError": "1MB"
      }
    ],
    "outputHashing": "all"    // Adds hash to filenames for cache busting
  },
  "development": {
    "optimization": false,     // No minification for faster builds
    "extractLicenses": false,
    "sourceMap": true           // Include source maps for debugging
  }
}
```

### Deployment

After building, deploy the `dist/` folder to any static hosting:
- **Firebase Hosting:** `firebase deploy`
- **Netlify:** Drag & drop the `dist/` folder
- **Vercel:** Connect your Git repo
- **Nginx / Apache:** Serve the `dist/` folder as static files

> **Important:** For SPA routing to work on a server, configure the server to redirect all routes to `index.html`.

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 🧠 Quick Reference — Angular Cheat Sheet

### Data Binding Summary

| Type | Syntax | Direction | Example |
|------|--------|-----------|---------|
| **Interpolation** | `{{ }}` | Component → View | `{{ title }}` |
| **Property Binding** | `[prop]` | Component → View | `[disabled]="isDisabled"` |
| **Event Binding** | `(event)` | View → Component | `(click)="onClick()"` |
| **Two-Way Binding** | `[(ngModel)]` | Both ways | `[(ngModel)]="name"` |

### CLI Quick Reference

| Command | Shortcut | Purpose |
|---------|----------|---------|
| `ng new app-name` | — | Create project |
| `ng serve` | — | Start dev server |
| `ng generate component name` | `ng g c name` | Create component |
| `ng generate service name` | `ng g s name` | Create service |
| `ng generate pipe name` | `ng g p name` | Create pipe |
| `ng build` | — | Production build |

### Signal Quick Reference

| Operation | Code |
|-----------|------|
| Create | `count = signal(0)` |
| Read | `count()` |
| Set | `count.set(10)` |
| Update | `count.update(c => c + 1)` |
| Computed | `total = computed(() => a() + b())` |
| Effect | `effect(() => console.log(val()))` |

---

## 📌 What's Next?

This repository covers Angular from **scratch to intermediate-advanced level**. Future topics to explore:

- [ ] Route Guards (CanActivate, CanDeactivate)
- [ ] Interceptors (HTTP request/response middleware)
- [ ] RxJS Operators (map, filter, switchMap, etc.)
- [ ] Angular Animations
- [ ] Server-Side Rendering (SSR) with Angular Universal
- [ ] State Management (NgRx)
- [ ] Unit Testing with Vitest/Karma
- [ ] Deployment (Firebase, Vercel, Netlify)
- [ ] Progressive Web App (PWA)
- [ ] Angular Elements (Web Components)

---

## 🤝 Contributing

If you find this helpful, feel free to ⭐ star this repo and share it with other learners!

---

## 📄 License

This project is for educational purposes. Feel free to use it for learning and reference.

---

<p align="center">
  <b>Built with ❤️ while learning Angular from scratch</b><br>
  <i>Every expert was once a beginner</i>
</p>

