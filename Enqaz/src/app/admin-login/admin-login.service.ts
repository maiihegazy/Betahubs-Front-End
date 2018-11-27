import {Injectable} from '@angular/core'
import { HttpClient} from '@angular/common/http';
import{Router} from '@angular/router'

@Injectable()
export class LoginService{
   
    private loginAPI :string; 
    public isExist: boolean = false; 

    constructor(private http:HttpClient , private router : Router){
         this.loginAPI = "https://enqaz-staging.herokuapp.com/user/admin/shared/login";
    }

    Login(email:string, password:string){
        let data ={
            'email': email,
            'password' : password,
            'fcmToken': null,
        }
        return this.http.post(this.loginAPI, data).subscribe(res=>{
            localStorage.setItem('fcmToken', res['token']);   
            this.isExist = res['success'];
            console.log(res);
            if (this.isExist){
            this.router.navigate(['admin-panel'])
            }
        })
    }
    
}