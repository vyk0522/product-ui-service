import { Component } from '@angular/core';

@Component({
  selector: 'ps-root',
  // Single line template
  // template: "Hello World!!!"
  // Multi Line template
  /*
  template: 
   `<div>
  <h1> {{title}} </h1>
  <!-- <ps-product></ps-product>  // We are using routes intead of directives --> 
  </div>`
  */
 template: 
 `
 <nav class='navbar navbar-expand navbar-light bg-light'>
        <a class='navbar-brand'>{{title}}</a>
        <ul class='nav nav-pills'>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/welcome'>Home</a></li>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/products'>Product List</a></li>
        </ul>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
 `
})
export class AppComponent {
  title = 'Product Management Application';
}
