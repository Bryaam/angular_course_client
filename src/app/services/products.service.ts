import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { Product } from '../models/product';
import { GLOBAL } from "./global";

@Injectable()
export class ProductsService {
  public url: string;

  constructor(
    public  _http: Http
  ) {
    this.url = GLOBAL.url;
   }

   get_products(){
     return this._http.get(this.url + 'products').map(response => response.json());
   }

}
