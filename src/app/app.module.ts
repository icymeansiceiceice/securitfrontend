import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS, HttpResponse, HttpHeaders } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BoardComponent } from './board/board.component';
import { ForgetComponent } from './forget/forget.component';
import { User } from './model/user';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { approuter } from './routing/rout';
import { HttpinterceptInterceptor } from './httpintercept.interceptor';
import { ResponseinterceptInterceptor } from './responseintercept.interceptor';
import { ChangePwdComponent } from './change-pwd/change-pwd.component';
import { ProfileComponent } from './profile/profile.component';

// @Injectable()
// export class XhrInterceptor implements HttpInterceptor {

//   user = new User();
//    i : any;
//   intercept(req: HttpRequest<any>, next: HttpHandler) {

//       this.user = JSON.parse(window.sessionStorage.getItem('userdetail') || '{}');
//       if(this.user && this.user.email && this.user.password){
//         this.i = 'Basic '+window.btoa(this.user.email+':'+this.user.password);
//       }
//       let auth = JSON.parse(window.sessionStorage.getItem('token') || '{}')
//       if(auth){
//         this.i = auth;
//       }
//      const xhr = req.clone({
//       setHeaders: {Authorization : this.i}, 
//       headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
      
//     });
//     return next.handle(xhr);
//   }
    
    
// }
  


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BoardComponent,
    ForgetComponent,
    ChangePwdComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    approuter
  ],
  providers: [
   // { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: HttpinterceptInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ResponseinterceptInterceptor, multi: true }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
