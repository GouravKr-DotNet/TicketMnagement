import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationRequest } from 'src/app/registration-request';
import { RegistrationResponse } from 'src/app/registration-response';
import { TicketApiService } from 'src/app/ticket-api.service';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private ticketService : TicketApiService,private requestData: RegistrationRequest, private route : Router) { }

  registrationForm! : FormGroup;
  message! : string;
  @ViewChild('modalButton') modalBtn! : ElementRef;
  confirmPass : string="";
  passwordMain : string="";
  passwordMatch : boolean = true;
  isRegisteredSuccess : boolean = false;

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      userId : new FormControl('',[Validators.required,Validators.maxLength(12)]),
      password : new FormControl('',[Validators.required,Validators.maxLength(12)]),
      confirmPassword: new FormControl('',[Validators.required,Validators.maxLength(12)]),
      fullName : new FormControl('',[Validators.required,Validators.maxLength(20)]),
      role : new FormControl('',[Validators.required])
    });
  }

  //confirm password check
  confirmPasswordCheck()
  {
    console.log(this.confirmPass  + " " + this.passwordMain);
    if(this.confirmPass != this.passwordMain)
      {
        this.passwordMatch = false;
      }
      else
      {
        this.passwordMatch = true;
      }

  }

  navigateToLogin()
  {
    if(this.isRegisteredSuccess)
      this.route.navigate(['LoginUser']);
  }

  RegisterUser(registrationData : FormGroup)
  {
    if(this.registrationForm.valid)
      {
        this.requestData.fullName = registrationData.value.fullName;
        this.requestData.password = registrationData.value.password;
        this.requestData.role = registrationData.value.role;
        this.requestData.userName = registrationData.value.userId;
        this.ticketService.registerNewUser(this.requestData).subscribe(
          (response: RegistrationResponse) => {
            this.message = response.message;
            if(response.isRegistered)
              {
                this.isRegisteredSuccess = true;
              }
            this.modalBtn.nativeElement.click();
            
           // this.openmodal.open('exampleModal');
          },
          (error) => {
            this.modalBtn.nativeElement.click();
           // this.openmodal.open('exampleModal');
          }
        );
      }
      else
      {
        this.message="Please make Entries correctly!";
        this.modalBtn.nativeElement.click();
      }
  }

}
