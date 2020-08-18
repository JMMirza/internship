import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})


export class DisplayComponent {
  title = 'crud';
  allUser: Object;
  userObj = {
    name: '',
    email: '',
    password: '',
    id: ''
  }
  constructor(private commonService: CommonService, private router: Router) { }
  ngOnInit() {
    this.getlatestUser();
  }
  
  getlatestUser() {
    this.commonService.getAllUser().subscribe((Response) => {
      this.allUser = Response
    })
  }
  deleteUser(user) {
    this.commonService.deleteUser(user).subscribe(() => {
      this.getlatestUser();
    })

  }
}

