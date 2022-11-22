import { Component, OnInit } from "@angular/core";
import { IProduct } from "./app";
import { ProductService } from "./app.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'discgolf-inventory';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
 
  private _listFilter: string = '';
  get listFilter(): string {
      return this._listFilter;
  }
      set listFilter(value: string) {
          this._listFilter = value;
          console.log('In Setter:', value);
          this.filteredProducts = this.performFilter(value);
      }

filteredProducts: IProduct[] = [];
  products: IProduct[] = [];

  constructor(private productService: ProductService) {}

  performFilter(filterBy: string): IProduct[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.products.filter((product: IProduct) =>
          product.productName.toLocaleLowerCase().includes(filterBy));
  }

  toggleImage(): void {
      this.showImage = !this.showImage;
  }

  ngOnInit() {
      this.products = this.productService.getProducts();
      this.filteredProducts = this.products;
  }
    



    
}
