
import {Component, OnInit, ViewChild} from '@angular/core';
import {toPromise} from "rxjs/operator/toPromise";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

declare var $:any;
@Component({
  selector: 'app-project-cost',
  templateUrl: './project-cost.component.html',
  styleUrls: ['./project-cost.component.css']
})
export class ProjectCostComponent implements OnInit {
  constructor(private http: HttpClient) {
  }
  ngOnInit() {
    // this.projectName ='项目A';
    this.getinit()
  }

  // 项目一览list
  projectList;
  // 根据项目id 判断是否显示对应的项目名 和项目一览
  mqId;
  //项目名备份
  projectBackName;

  getinit(){
    var employeeId = sessionStorage.getItem('employeeId');
    console.log('empId='+employeeId);
    this.http.get('http://192.168.99.17:8080/initProjectCost',{header:{user:sessionStorage.getItem('user')}}).toPromise().then(
      res=>{
        console.log(res)
      }
    ).catch(this.handleError);

    this.http.get("assets/jsonData/project.json").subscribe(
      data=>{
        console.log(data["result"].xmData);
        this.projectList=data["result"].xmData;
        let newProject=  {
          "xmName":"新建项目",
          "plan":[]
        };
        this.projectList.unshift(newProject);
      }
    );
  }


  // 进入编辑项目名页面，根据传入的项目id，确定show对应的编辑项目名
  // 传入info=-1,表示退出编辑页面，（项目id!=-1）
  yincang(index){
    this.mqId=index;
    this.projectBackName = this.projectList[index].xmName;
  }

  //清空输入栏内容
  clear(index){
    this.projectList[index].xmName = '';
  }

  //回滚项目名
  rollback(index){
    console.log('当前输入栏内容为',this.projectList[index].xmName);
    console.log('回滚数据为',this.projectBackName);
    this.projectList[index].xmName = this.projectBackName;
    this.mqId= -1;
  }

  // 修改项目名称发送http请求
  fahttp(name,index){
    console.log(this.projectList);
    var tmpName = name.trim();
    console.log('输入栏：'+name);
    console.log('首位去空格'+tmpName);
    //新建项目名
    if(index == 0){
      if(name == '新建项目'){
        alert('请输入新建项目名');
        return;
      }else if(tmpName === ''){
        alert('项目名不能为空!!');
        return;
      }else{
        //发送新建项目名给后台
        console.log('新建项目名为',name);
        let newProject=  {
          "xmName":"新建项目",
          "plan":[]
        };
        this.projectList.unshift(newProject);
        this.mqId=-1;
      }
    }else{//变更项目名
      // 传递对应的改变的项目名称
      // 发送htttp请求,post传递修改了的项目名称
      if(tmpName == this.projectList[index].xmName){
        this.mqId=-1;
      }else if(tmpName == '' || tmpName ==undefined){
        alert('项目名不能为空!!');
        return;
      }else{
        console.log("改变以后的项目名称",name);
        this.mqId=-1;
      }
    }
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
