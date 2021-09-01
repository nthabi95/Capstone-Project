import { Product } from './../models/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(`http://localhost:3000/products`)
  }

  getProductById(id: number): Observable<Product> {
    return this._http.get<Product>(`http://localhost:3000/products/${id}`);
  }

}
