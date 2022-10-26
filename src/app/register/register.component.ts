import { Url } from './../url/URL';
import { HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from '../services/loginservice.service';
import { User } from '../model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error = '';
  pict = '';
  use = new User();

  constructor(private lin : LoginserviceService,private router : Router) { }

  ngOnInit(): void {
  }

  selectpic(e : any){
    if(e.target.files){
      var read = new FileReader();
      read.readAsDataURL(e.target.files[0]);
      read.onload=(event : any)=>{
        this.pict = event.target.result;
      }
    }
}

  register(user : NgForm){
    this.use.pic = this.pict;
    this.use.name= user.value.name;
    this.use.email = user.value.email;
    this.use.password = user.value.password;
    this.use.confirm = user.value.confirm;
    this.use.role = 'admin';
    this.use.enable = false;
    this.use.pic = this.pict;

    this.lin.reigster(this.use).subscribe({
      next:(res:any) => {
        if (res ==  'already'){
          this.error = 'This Email is Already Created !!';
          this.router.navigate(['register']);
        }
        if (res ==  'not match'){
          this.error = 'Password Doesnt Match!!';
          this.router.navigate(['register']);
        }
        if(res == 'success'){
          this.router.navigate(['login']);
        }
      },error:(er) =>{
        console.log(er);
      }
  });

  }


  

}
