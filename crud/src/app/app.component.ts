import { Component } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud';
  allUser: Object;
  userObj={
    name:'',
    email:'',
    password:'',
    id:''
  }
  constructor(private commonService:CommonService){}
  ngOnInit(){
    this.getlatestUser();
  }
  addUser(formObj){
    console.log(formObj)
    this.commonService.createUser(formObj).subscribe((Response)=>{
      this.getlatestUser();
    })
  }
  getlatestUser(){
    this.commonService.getAllUser().subscribe((Response)=>
    {
      this.allUser=Response
    })
  }
  editUser(user){
    this.userObj=user;
  }
  deleteUser(user){
    this.commonService.deleteUser(user).subscribe(()=>{
      this.getlatestUser();
    })

  }
  updateUser(){
    this.commonService.updateUser(this.userObj).subscribe(()=>{
      this.getlatestUser();
    })
  }
}
