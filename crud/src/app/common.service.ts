import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  URL = "http://localhost:3000/users/"
  constructor(private _http:HttpClient) { }
  createUser(user){
    return this._http.post("http://localhost:3000/users",user)
  }
  updateUser(id,data){
    return this._http.put(`${this.URL}/${id}`,data)

  }
  getAllUser(){
    return this._http.get("http://localhost:3000/users")
  }
  deleteUser(user){
    return this._http.delete("http://localhost:3000/users/" +user.id)
  }
  getCurrentData(id){
    return this._http.get(`${this.URL}/${id}`)

  }
  
}
