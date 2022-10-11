import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_service/auth.service';
import { TokenStorageService } from '../_service/token-storage.service';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';
import { LoggerService } from '../_service/logger/logger.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  password:any;
  username:any;

  constructor(private authService:AuthService,private tokenStorageService:TokenStorageService,private router: Router,public globalService:GlobalService, private logger: LoggerService) { }

  ngOnInit(): void {
  }

  

  LogIn(username:any,password:any){
    this.authService.login(username,password).subscribe(result=>{
      console.log(result)
      if(result.token){
       this.tokenStorageService.saveToken(result.token);
       this.tokenStorageService.saveUser(result)
       this.logger.info("Login Successful");
       this.globalService.showSuccess("Login Successful");
       this.router.navigate(['/']);
      }
    },error => {
      this.globalService.showError(error.error.message);
    });
  }

}
