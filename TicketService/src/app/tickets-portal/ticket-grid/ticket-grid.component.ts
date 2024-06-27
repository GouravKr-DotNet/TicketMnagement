import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketApiService } from 'src/app/ticket-api.service';
import { TicketsList } from 'src/app/tickets-list';

@Component({
  selector: 'app-ticket-grid',
  templateUrl: './ticket-grid.component.html',
  styleUrls: ['./ticket-grid.component.scss'],
})
export class TicketGridComponent implements OnInit {
  ticketId! : string;
  status! : string;
  description! : string;
  title! : string;
  tickets! : TicketsList[];
  message! : string;
  cuurentIndex! : number;
  editTicket : TicketsList = new TicketsList();

  @ViewChild('modalButtonCnf') responseBtn! : ElementRef;

  constructor(private ticketService : TicketApiService, private route: Router) { }

  ngOnInit(): void {
    this.ticketService.getAllTickets().subscribe
    (
      (response: TicketsList[]) =>{
        this.tickets = response;
      }
        
    );
  }

  navigateToForm()
  {
    this.route.navigate(['ticketForm']);
  }

  onDelete(event: any,index : number)
  {
    this.ticketId = this.tickets[index].ticketId;
    this.cuurentIndex = index;
  }

  onEdit(event: any, index : number)
  {
   this.editTicket.ticketId = this.tickets[index].ticketId;
   this.editTicket.description = this.tickets[index].description;
   this.editTicket.title = this.tickets[index].title;
   this.editTicket.status = this.tickets[index].status;
  }

  onDeleteConfirmation()
  {
    this.ticketService.deleteTicket(this.ticketId).subscribe
    (
      (response) => {
        if(response)
          {
            this.message = "Ticket Removed!";
            this.responseBtn.nativeElement.click();
            this.tickets.splice(this.cuurentIndex);
          }
      }, 
      (errorresponse) => {
        this.message = "Error Occured!";
        this.responseBtn.nativeElement.click();
      }
    )
  }

}
