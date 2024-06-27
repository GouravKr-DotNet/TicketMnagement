import { Injectable } from '@angular/core';
import { RegistrationRequest } from './registration-request';
import { Observable } from 'rxjs';
import { RegistrationResponse } from './registration-response';
import { HttpClient } from '@angular/common/http'
import { LoginRequest } from './login-request';
import { LoginResponse } from './login-response';
import { TicketsList } from './tickets-list';
import { TicketRequest } from './ticket-request';
import { TicketResponse } from './ticket-response';
import { TicketUpdateRequest } from './ticket-update-request';
import { TicketUpdateresponse } from './ticket-updateresponse';


@Injectable({
  providedIn: 'root'
})
export class TicketApiService {

  constructor(private httpClient : HttpClient) { }

 registerNewUser(registrationData : RegistrationRequest) : Observable<RegistrationResponse>
 {
  return this.httpClient.post<RegistrationResponse>("http://localhost:5297/api/registerUser",registrationData);
 }

 loginUserCheck(loginRequest : LoginRequest) : Observable<LoginResponse>{
  return this.httpClient.post<LoginResponse>("http://localhost:5297/api/LoginUser",loginRequest);
 }

 getAllTickets(): Observable<TicketsList[]>
 {
  return this.httpClient.get<TicketsList[]>('http://localhost:5297/api/getAllTickets');
 }

 generateNewTicket(ticketReq : TicketRequest) : Observable<TicketResponse>
 {
  return this.httpClient.post<TicketResponse>("http://localhost:5297/api/generateTicket",ticketReq);
 };

 deleteTicket(ticketId : string) : Observable<boolean>
 {
  return this.httpClient.delete<boolean>("http://localhost:5297/api/deleteTicket?id="+ticketId);
 }

 updateTicketRequst(ticket: TicketUpdateRequest) : Observable<TicketUpdateresponse>
 {
  return this.httpClient.put<TicketUpdateresponse>("http://localhost:5297/api/updateTicket",ticket);
 }

 getTicketsByStatus(status : string) : Observable<TicketsList[]>
 {
  return this.httpClient.get<TicketsList[]>('http://localhost:5297/api/getTicketsByStatus?status='+status);
 }

}
