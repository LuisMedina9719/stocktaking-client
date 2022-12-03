import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  products:any = JSON.parse(localStorage.getItem("cart") || '[]')
  total = {
    quantity: 0,
    total: 0
  }

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.total.quantity = 0
    this.total.total = 0
    this.products = this.commonService.carro ? JSON.parse(localStorage.getItem("cart") || '[]') : [];
    this.products.map((producto:any) => {
      this.total.quantity += producto.quantity,
      this.total.total += producto.price
    })
    console.log(this.total)
  }

  ionViewWillEnter() {
    this.total.quantity = 0
    this.total.total = 0
    this.products = this.commonService.carro ? JSON.parse(localStorage.getItem("cart") || '[]') : [];
    this.products.map((producto:any) => {
      this.total.quantity += producto.quantity,
      this.total.total += producto.price
    })
    console.log(this.total)
  }

  subtract(product:any){
    console.log(product)
    this.commonService.subtractProduct(product)
    this.ionViewWillEnter()
  }

}
