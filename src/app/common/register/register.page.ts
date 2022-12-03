import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user:any = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    rol: "cliente",
    avatar: ""
  }

  constructor(private commonService: CommonService, private router:Router) { }

  ngOnInit() {
  }

  register(){
    this.commonService.register(this.user).subscribe(data =>{
      console.log(data)
      this.commonService.logIn(this.user).subscribe(login => {
        console.log(login)
        localStorage.setItem('jwt', login.token)
        localStorage.setItem('role', login.rol)
        localStorage.setItem('email', login.email)
        localStorage.setItem('id', login.id)
        this.router.navigate(['/'])
      })
    })
  }
}
