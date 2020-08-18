import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  allUser: Object;
  id: number;
  header: string;
  userObj = {
    name: '',
    email: '',
    password: '',
    id: '',
  };
  editUser = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });
  

  constructor(private commonService: CommonService, private router: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    console.log(this.router.snapshot.params.id)
    this.commonService.getCurrentData(this.router.snapshot.params.id).subscribe((result) => {
      this.editUser = new FormGroup({
        name: new FormControl(result['name']),
        email: new FormControl(result['email']),
        password: new FormControl(result['password'])
      });
    })
  }
  updateUser() {
    this.commonService.updateUser(this.router.snapshot.params.id,this.editUser.value).subscribe((result) => {
      console.log(result, "data updated");
      this.route.navigateByUrl('');
    })
  }
}