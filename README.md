# AngularPlayground

## Start
To start the project locally:
```sh
npm install
npm run start
```

## Learnings

### Tutorials
This is how I went about learning Angular.
1. Watched [this](https://www.youtube.com/watch?v=f7BJFTEbc10) youtube video on Angular and followed along.
2. Read the Angular [Essentials](https://angular.dev/essentials) docs.
3. Watched [this](https://www.youtube.com/watch?v=bZKXtgNbKE0) youtube video on rxjs.

### Examples
- [Pipe example](./src/app/pipes/truncate-name.pipe.ts). [Usage](./src/app/components/product/product.component.html)
	```html
	<h2 class="title">{{ product.name | truncateName : 16 : "..." }}</h2>
	```
- [Module example](./src/app/modules/about-us/about-us.module.ts)
- [Service example](./src/app/services/products.service.ts)
- [Dynamic properties example](./src/app/components/edit-popup/edit-popup.component.html) - whether or not a property is present on an element or not
	```html
	<p-dialog [header]="header" [(visible)]="display" [modal]="true" [closable]="false">
	```
- [Singular file component example](./src/app/layout/footer/footer.component.ts)
- [Dependency injection example](./src/app/components/edit-popup/edit-popup.component.ts)
- [Directive/loop example](./src/app/home/home.component.html)
	```html
	*ngFor="let product of products"
	OR
	@for (product of products; track product.id) {
	```
- Conditional rendering example: [html](./src/app/components/product/product.component.html), [TS](./src/app/components/product/product.component.ts). [Implementation](./src/app/services/browser.service.ts) (rxjs example).

## Other
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.5.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
