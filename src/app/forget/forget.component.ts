import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../services/loginservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {

  error : string = '';

  constructor(private lin : LoginserviceService,private router : Router) { }

  ngOnInit(): void {
  }

  forget(user : NgForm){
    this.lin.forgetPwd(user.value.email).subscribe(
      (res : any) => {
        console.log(user.value.email);
          if(res == 'not found'){
            this.error = 'Your account is not created with this email!!';
            this.router.navigate(['forget']); 
          }
          if(res == 'success'){
            this.error = 'Please check your email and change password';
            
            this.router.navigate(['login']);
          }
      }
    );
  }

}
