import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlSerializer } from '@angular/router';
import { ObservableInput, Observable } from 'rxjs';
import { User } from '../user';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http:HttpClient, private user:User) { }
  createUser(user){
    return this._http.post("http://localhost:3000/users",user)
  }
  updateUser(user){
    return this._http.put("http://localhost:3000/users/" + user.id,user)

  }
  getAllUser(){
    return this._http.get("http://localhost:3000/users")
  }
  deleteUser(user){
    return this._http.delete("http://localhost:3000/users/" +user.id)
  }
  
}
