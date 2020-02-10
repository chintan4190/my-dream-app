import { Component, OnInit } from '@angular/core';
import { IProduct } from './product'
import { ProductService } from './product.service'

@Component({
  selector: 'prd-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{

  pageTitle: string = 'Product List';
  showImage: boolean = true;
  imageWidth = 50;
  imageMargin = 2;
  _listFilter = '';
  errorMessage: string;

  products: IProduct[];

  filteredProducts : IProduct[] = this.products;

  constructor(private productService: ProductService){
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }
performFilter(filterBy: string) : IProduct[] {
  filterBy = filterBy.toLocaleLowerCase();
  return this.products.filter( (product: IProduct) =>
    product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
  )
}

onClick() : void {
  this.showImage = !this.showImage;
}

onRatingClicked(message: string) : void{
  this.pageTitle = 'Product List '+message;
}

ngOnInit(): void {
  console.log("getting products");
  this.productService.getProducts().subscribe({
    next: products => {
      console.log(products);
      this.products = products;
      this.filteredProducts = this.products;
    },
    error: err => {
      this.errorMessage = err
    }
  });
  }
}
