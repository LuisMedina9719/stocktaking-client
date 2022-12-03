import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/common/common.service';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  product: any = {
    id_product: "",
    description: "",
    stock: 0,
    price: 0,
    category_id: 0,
    name:""
  }

  constructor(private pagesService: PagesService, private activatedRoute: ActivatedRoute, private commonService: CommonService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const prodId = paramMap.get("productId")
      this.pagesService.getProduct(prodId).subscribe(data => {
        this.product = data
        console.log(data)
      })

    })
  }
  ionViewWillEnter() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const prodId = paramMap.get("productId")
      this.pagesService.getProduct(prodId).subscribe(data => {
        this.product = data
        console.log(data)
      })
    })
  }

  agregar(){
    console.log("hola")
    const producto = {
      id_product: this.product.id_product,
      price: this.product.price,
      quantity: 1,
      name: this.product.name
    }
    this.commonService.addToCart(producto)
  }

}
