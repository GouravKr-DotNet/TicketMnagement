import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationRequest } from '../registration-request';
import { RegistrationResponse } from '../registration-response';
import { LoginRequest } from '../login-request';
import { LoginResponse } from '../login-response';
import { TicketsPortalModule } from '../tickets-portal/tickets-portal.module';
import { SharedServiceService } from '../shared-service.service';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    TicketsPortalModule
  ],
  providers:[RegistrationRequest,RegistrationResponse,LoginRequest,LoginResponse,SharedServiceService]
})
export class UserModuleModule { }
