import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {RequestOptions} from "@angular/http";

@Component({
  selector: 'app-attend',
  templateUrl: './attend.component.html',
  styleUrls: ['./attend.component.css']
})
export class AttendComponent implements OnInit {

  now:Date;
  year:any;
  attendList;
  projects;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.now=new Date();
    this.year = this.now.getFullYear();
    this.getinit(this.year);

  }

  getinit(year){
    // let user = sessionStorage.getItem('user');
    // let userStr = JSON.stringify(user);
    // console.log(userStr);
    // let headers = new HttpHeaders({ "user": userStr });
    // headers.append("Accept", "application/json");
    this.http.get('http://192.168.99.17:8080/initCheckOnMonth',{params:{year:year}}).toPromise().then(
      res=>{
        console.log(res);
        this.attendList=res.data.projects;
      }
    ).catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
