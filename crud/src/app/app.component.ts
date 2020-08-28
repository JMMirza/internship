import { Component } from '@angular/core';
import { CommonService } from './common.service';
import{ ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud';
  allUser: Object;
  constructor(private commonService:CommonService, private router: ActivatedRoute){}
  ngOnInit(){
    this.getlatestUser();
  }
  
  getlatestUser(){
    this.commonService.getAllUser().subscribe((Response)=>
    {
      this.allUser=Response
    })
  }
  
}
