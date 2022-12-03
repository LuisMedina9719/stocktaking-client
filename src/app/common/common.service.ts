import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  url = "http://204.236.202.95:4000/api"
  localUrl = "http://localhost:4000/api"
  carro:any = JSON.parse(localStorage.getItem("cart") || '[]') ;
  
  constructor(private http: HttpClient) { }

  getProducts() {
    const products = this.http.get<any>(`${this.url}/admin/products`)
    return products
  }

  getCategories(){
    const categories = this.http.get<any>(`${this.url}/categories`)
    return categories
  }

  addToCart(product:any){
    console.log("hola")
    const carro = this.carro
    if (carro.find((x:any) => x.id_product === product.id_product)) {
      const newCarro = carro.map((x:any) => x.id_product === product.id_product
        ? ({
          ...x,
          quantity: x.quantity + 1,
          total: x.price + product.price
        })
        : x)
        console.log("Agregado otra vez")
        return this.carro = newCarro, localStorage.setItem("cart", JSON.stringify(this.carro))
    }
    console.log("nuevo producto")
    return this.carro.push(product), localStorage.setItem("cart", JSON.stringify(this.carro))
  }

  subtractProduct(product:any){
    if (this.carro && this.carro.length > 0 ) {
      this.carro.find((producto:any) => {
        if (producto.id_product === product.id_product) {
          if (producto.quantity === 1) {
            const newCarro = this.carro.filter((x:any) => x.id_product != product.id_product)
            return this.carro = newCarro, localStorage.setItem("cart", JSON.stringify(this.carro))
          }
          producto.quantity --;
          producto.total -= product.price
        }
      })
      return localStorage.setItem("cart", JSON.stringify(this.carro)),
      console.log(this.carro)
    }
  }

  register(user:any){
    const body = {
      name: user.name,
      email: user.email,
      password: user.password,
      rol: user.rol,
      avatar: user.avatar
    }
    return this.http.post<any>(`${this.url}/admin/users`, body)
  }

  logIn(user:any){
    const body = {
      email: user.email,
      password: user.password
    }
    const login = this.http.post<any>(`${this.url}/admin/login`, body)
    return login
  }

  showUser(id:any){
    const user = this.http.get<any>(`${this.url}/admin/users/${id}`)
    return user
  }

}
