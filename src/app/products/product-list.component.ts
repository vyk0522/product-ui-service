import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Product } from "./product";
import { ProductService } from "./product.service";

@Component({
    // selector: 'ps-product',  // No need as we are using routes
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy{
    title: string = 'Product List';
    imageWidth = 50;
    imageMargin = 2;
    showImage = false;
    errorMessage = '';
    // sub: Subscription | undefined;
    sub!: Subscription;  // We will assign it some time later

    private _listFilter: string = ''; // Private variables starts with _
    filteredProducts: Product[] = [];

    // Getter
    get listFilter(): string{
      return this._listFilter;
    }

    // Setter
    set listFilter(value: string){
      this._listFilter = value;
      console.log('In setter value: ' + value)
      this.filteredProducts = this.filterProducts(value);
    }

    // Dependency Injection
    constructor(private productService: ProductService){

    }

    products: Product[] = [];

    // Function
    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
      this.sub = this.productService
      .getProducts()
      .subscribe({
        next: products => {
          this.products = products;
          this.filteredProducts = this.products;
        },
        error: error => this.errorMessage = error
      })

      //this.listFilter = 'cart';
    }

    ngOnDestroy(): void {
      this.sub.unsubscribe;
    }

    filterProducts(value: string): Product[] {
      return this.products.filter(e => e.productName.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
    }

    onRatingClicked(message: string): void {
      this.title = 'Product List: ' + message;
    }

}