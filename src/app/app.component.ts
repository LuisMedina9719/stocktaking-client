import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from './common/common.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages: any = [];

  constructor(private commonService: CommonService, private router:Router) {}

  ngOnInit(){
    this.commonService.getCategories().subscribe(data => {
      this.appPages = data
      console.log(data)
    })
  }

  profile(){
    const user = localStorage.getItem("jwt") || null
    if (!user) {
     this.router.navigate(['/register'])
    }
    if (user) {
      this.router.navigate(['/profile'])
    }
  }
}
