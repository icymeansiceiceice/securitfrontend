import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';
import { Url } from '../url/URL';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http:HttpClient) { }

  login(user: User){
    window.sessionStorage.setItem('userdetail',JSON.stringify(user)); 
    return this.http.get(environment.url+Url.Login_URL,{observe:'response',withCredentials:true});
  }

  reigster(user : User):Observable<string>{
    return  this.http.post<string>(environment.url+Url.Register_User,user,{withCredentials:true,responseType:'Text' as'json'});
  }

  forgetPwd(email : String):Observable<string>{
    return  this.http.post<string>(environment.url+Url.Forget_Pwd,email,{withCredentials:true,responseType:'Text' as'json'});
  }

  ChangePwd(user : User):Observable<string>{
    return  this.http.post<string>(environment.url+Url.Change_Pwd,user,{withCredentials:true,responseType:'Text' as'json'});
  }


}
