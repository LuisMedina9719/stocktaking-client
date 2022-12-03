import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  products: any = []

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.getProducts().subscribe(data => {
      this.products = data
      console.log(this.products[0].name)
    })
  }

  ionViewWillEnter() {
    this.commonService.getProducts().subscribe(data => {
      this.products = data
      // console.log(this.products[0])
    })
  }

  
}
