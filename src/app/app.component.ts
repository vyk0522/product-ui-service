import { Component } from '@angular/core';

@Component({
  selector: 'ps-root',
  // Single line template
  // template: "Hello World!!!"
  // Multi Line template
  template: 
  `
  <div>
  <h1> {{title}} </h1>
  <ps-product></ps-product>
  </div>

  `
})
export class AppComponent {
  title = 'Product Management Application';
}
