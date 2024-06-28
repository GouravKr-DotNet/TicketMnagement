import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketApiService } from 'src/app/ticket-api.service';
import { TicketRequest } from 'src/app/ticket-request';
import { TicketResponse } from 'src/app/ticket-response';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.scss']
})
export class NewTicketComponent implements OnInit {

  newTicket! : FormGroup;
  @ViewChild('modalButton') eventresponse! : ElementRef; 
  message! : string;
  isTicketSuccess : boolean = false;


  constructor(private ticketReq : TicketRequest, private ticketApi : TicketApiService, private route : Router) { }

  ngOnInit(): void {
    this.newTicket = new FormGroup({
      title : new FormControl('',Validators.required),
      desc : new FormControl('',Validators.required)
    });
  }

  getSession()
  {
    return sessionStorage.getItem('userLoggedIn');
  }

  checkResponse()
  {
    if(this.isTicketSuccess)
      {
        this.route.navigate(['TicketList']);
      }
  }

  newTicketSubmit(newticket : FormGroup){
    this.ticketReq.UserId = JSON.stringify(sessionStorage.getItem('userLoggedIn'));
    this.ticketReq.Description = newticket.value.desc;
    this.ticketReq.Title = newticket.value.title;
    this.ticketReq.Status = "Pending";  
    this.ticketApi.generateNewTicket(this.ticketReq).subscribe
    (
      (response: TicketResponse) => {
        console.log(response);
        if(response.isGenerated)
          {
            this.message = response['message'];
            this.eventresponse.nativeElement.click();
            this.isTicketSuccess = true;
           // this.route.navigate(['TicketList']);
          }
          else{
            this.message = response.message + " " + response.isGenerated;
            this.eventresponse.nativeElement.click();
          }
      },(errorresponse) => {}
    )

  }

}
