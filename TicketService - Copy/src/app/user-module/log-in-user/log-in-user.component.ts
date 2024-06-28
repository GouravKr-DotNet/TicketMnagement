import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/login-request';
import { LoginResponse } from 'src/app/login-response';
import { SharedServiceService } from 'src/app/shared-service.service';
import { TicketApiService } from 'src/app/ticket-api.service';

@Component({
  selector: 'app-log-in-user',
  templateUrl: './log-in-user.component.html',
  styleUrls: ['./log-in-user.component.scss']
})
export class LogInUserComponent implements OnInit {
  message! : string;
  @ViewChild('modalButton') resultBtn! :  ElementRef;
  isAuthenticated : boolean = false;
  isLoading : boolean = false;

  constructor(private ticketApi : TicketApiService,private loginReq : LoginRequest,private route : Router,private sharedService : SharedServiceService) { }
  loginForm! : FormGroup;
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userId : new FormControl('',Validators.required),
      password : new FormControl('',Validators.required)
    });
  }

  navigateToList()
  {
    if(this.isAuthenticated)
    this.route.navigate(['TicketList']);
  }


  checkLogin(userdetails : FormGroup){
    this.isLoading = true;
    if(this.loginForm.valid)
      {
        this.loginReq.UserId = userdetails.value.userId;
        this.loginReq.Password = userdetails.value.password;
        this.ticketApi.loginUserCheck(this.loginReq).subscribe(
          (response: LoginResponse) => {
            this.message = response.response;
           // this.resultBtn.nativeElement.click();
           if(response.success)
            {
              this.sharedService.setValue(true);
              this.isAuthenticated = true;
              sessionStorage.setItem('userLoggedIn',userdetails.value.userId);
              this.resultBtn.nativeElement.click();
              this.isLoading = false;
            }
           
          else
          this.resultBtn.nativeElement.click();
          },
          (error) => {
            this.message = error.message;
            this.resultBtn.nativeElement.click();
          }
        )
      }
  }

}
