import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = {
    email: "",
    password: ""
  }

  constructor(private commonService: CommonService, private router:Router) { }

  ngOnInit() {
  }

  logIn(){
    this.commonService.logIn(this.user).subscribe(data => {
      console.log(data);
        localStorage.setItem('jwt', data.token)
        localStorage.setItem('role', data.rol)
        localStorage.setItem('email', data.email)
        localStorage.setItem('id', data.id)
        this.router.navigate(['/'])
    })
  }

}
