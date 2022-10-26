import { ChangePwdComponent } from './../change-pwd/change-pwd.component';
import { RouterModule, Routes } from "@angular/router";
import { BoardComponent } from "../board/board.component";
import { ForgetComponent } from "../forget/forget.component";
import { LoginComponent } from "../login/login.component";
import { RegisterComponent } from '../register/register.component';



const route : Routes = [
    {path:'login',component:LoginComponent},
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'board',component:BoardComponent},
    {path:'register',component:RegisterComponent},
    {path:'forget',component:ForgetComponent},
    {path:'chnpwd',component:ChangePwdComponent}
    
]
    
export const approuter = RouterModule.forRoot(route);