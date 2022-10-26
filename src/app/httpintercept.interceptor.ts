import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './model/user';

@Injectable()
export class HttpinterceptInterceptor implements HttpInterceptor {

  user = new User();
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let Authorization : any;

    this.user = JSON.parse(window.sessionStorage.getItem('userdetail') || '{}');
    if(this.user && this.user.email && this.user.password){
      Authorization ='Basic '+window.btoa(this.user.email+':'+this.user.password);
      window.sessionStorage.removeItem('userdetail');
    }
     let auth = JSON.parse(window.sessionStorage.getItem('Authorization') || 'null')
      if (auth) {
      Authorization = auth;
      window.sessionStorage.removeItem('Authorization');
     }

     if((this.user && this.user.email && this.user.password) || (auth)){
    
      const req = request.clone(
      {
        setHeaders:{
          Authorization
        }
      ,
       headers: request.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(req);
  }

  return next.handle(request);
    
  }
}
