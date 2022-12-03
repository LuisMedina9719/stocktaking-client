import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  products: any = []
  searchedProduct: any 

  constructor(private pagesService: PagesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const cateId = paramMap.get('categoryId')
      this.pagesService.getProductsByCategory(cateId).subscribe(data => {
        this.products = data
        this.searchedProduct = this.products
        console.log(this.products)
      })
    })
  }

  ionViewWillEnter() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const cateId = paramMap.get('categoryId')
      this.pagesService.getProductsByCategory(cateId).subscribe(data => {
        this.products = data
        this.searchedProduct = this.products
        console.log(this.products)
      })
    })
  }

  searchProduct(event:any){
    const text = event.target.value
    this.searchedProduct = this.products
    if (text && text.trim() != " ") {
      this.searchedProduct = this.searchedProduct.filter((product: any) => {
        return (product.name.toLowerCase().indexOf(text.toLowerCase()) > -1)
      })
    }
  }

}
