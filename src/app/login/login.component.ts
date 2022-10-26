import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginserviceService } from '../services/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error = '';

  constructor(private lin : LoginserviceService,private router : Router) { }

  ngOnInit(): void {
  }
 
  login(user : NgForm){
    this.lin.login(user.value).subscribe({
      next:(res) => {
        if(res != null){
          window.sessionStorage.setItem('userdetail',JSON.stringify(res));
          this.router.navigate(['board']);
        }

      },error:(err) => {
            this.error = 'Your Account is Invalid!!!';
      }
  });
  }
   
}
