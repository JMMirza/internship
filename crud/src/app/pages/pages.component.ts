import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  allUser: Object;
  id: number;
  header: string;
  userObj = {
    name: '',
    email: '',
    password: '',
    id: '',
  }
  constructor(private commonService: CommonService, private router: ActivatedRoute, private route: Router) { }
  ngOnInit() {
   this.id = +this.router.snapshot.paramMap.get('id');
   this.header = this.id === 0? 'Create User' : 'Edit User';

   this.router.paramMap.subscribe(
     params =>{ const usId =+params.get('id');
     if(usId){
       
     }

     })
   
  }
  
  addUser(formObj) {
    console.log(formObj)
    this.commonService.createUser(formObj).subscribe((Response) => {
      this.getlatestUser(); 
      this.route.navigateByUrl('user');
    })
      
  }
  getlatestUser() {
    this.commonService.getAllUser().subscribe((Response) => {
      this.allUser = Response
    })
  }
  editUser(user) {
    this.userObj = user;
  }
  updateUser() {
    this.commonService.updateUser(this.userObj).subscribe(() => {
      this.getlatestUser();
    })
  }
}
