import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

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
  editUser = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });
  constructor(private commonService: CommonService, private router: ActivatedRoute, private route: Router) { }
  ngOnInit() {
   this.id = +this.router.snapshot.paramMap.get('id');
    this.header = this.id === 0 ? 'Create User' : 'Edit User';   
   
  }
  
  addUser(formObj) {
    console.log(formObj)
    this.commonService.createUser(formObj).subscribe((Response) => {
      this.getlatestUser(); 
      this.route.navigateByUrl('');
    })
      
  }
  getlatestUser() {
    this.commonService.getAllUser().subscribe((Response) => {
      this.allUser = Response
    })
  }
 
}
