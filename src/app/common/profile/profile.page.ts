import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.css'],
})
export class ProfilePage implements OnInit {
  id = localStorage.getItem("id")
  user: any = {
    avatar: "",
    email: "",
    id_user: "",
    name: "",
    office_id: "",
    rol:"",
    warehouse_id:""
  }

  constructor(private commonService: CommonService, private router:Router) { }

  ngOnInit() {
    this.commonService.showUser(this.id).subscribe(data => {
      this.user = data[0]
      console.log(this.user)
    })
  }

  logOut(){
    console.log("hola")
    localStorage.clear()
    if (!localStorage.getItem("jwt")) {
      this.router.navigate(['/'])
    }
  }
}
