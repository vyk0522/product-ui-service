import { Component, OnInit } from "@angular/core";
import { Product } from "./product";

@Component({
    selector: 'ps-product',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    title: string = 'Product List';
    imageWidth = 50;
    imageMargin = 2;
    showImage = false;

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

    products: Product[] = 
    [
        {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2021",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "assets/images/leaf_rake.png"
      },
      {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2021",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "assets/images/garden_cart.png"
      }
    ];

    // Function
    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
      console.log("In onInit");
      this.listFilter = 'cart';
    }

    filterProducts(value: string): Product[] {
      return this.products.filter(e => e.productName.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
    }

    onRatingClicked(message: string): void {
      this.title = 'Product List: ' + message;
    }

}