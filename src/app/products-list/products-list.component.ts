import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  providers: [ProductsService]
})
export class ProductsListComponent implements OnInit {
  public title: string;
  public products: Product[];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductsService
  ) {
    this.title = "Product's Index"
   }

  ngOnInit() {
    this._productService.get_products().subscribe(
      result => {
        this.products = result;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
