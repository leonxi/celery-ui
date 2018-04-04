import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message:string;
  data:any;
  constructor(public router:Router,private http: HttpClient) { }

  ngOnInit() {

  }
  login(info){
    if(info.Username == ''|| info.Username==undefined){
      alert('用户名不能为空！');
      return;
    }
    if(info.Password == ''|| info.Password==undefined){
      alert('密码不能为空！');
      return;
    }
    this.http.get('http://192.168.99.17:8080/login', {params:{userName:info.Username,password:info.Password}}).toPromise().then(
      res=>
      {
        console.log(res);
        if(res.data.result === true){
          sessionStorage.setItem('user',res.data.user);
          sessionStorage.setItem('employeeId','233');
          this.router.navigate(["allbox/index"]);
        }else {
          alert('用户名或密码不正确！');
        }
      }
    //跳转进入欢迎页
    //   this.router.navigate(["allbox/index"]);
    )
    // this.router.navigate(["allbox/index"]);

  }

}
