import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  LocalUrl = "http://localhost:4000/api/"
  url = "http://204.236.202.95:4000/api"

  constructor(private http: HttpClient) { }

  getProductsByCategory(idCategory:any){
    const products = this.http.get<any>(`${this.url}productsByCategory/${idCategory}`)
    return products
  }

  getProduct(idProduct:any){
    const product = this.http.get<any>(`${this.url}product/${idProduct}`)
    return product
  }
}
