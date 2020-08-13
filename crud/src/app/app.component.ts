import { Component } from '@angular/core';
import { CommonService } from './common.service';
import{ Router,ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
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
  constructor(private commonService:CommonService, private router: Router){}
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
  editUser(userid: Number){
    this.router.navigate(['/edit',userid])
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
  gotoPage(pageName: string){
    this.router.navigate([`${pageName}`])
  }
}
