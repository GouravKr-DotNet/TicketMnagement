import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketApiService } from 'src/app/ticket-api.service';
import { TicketUpdateRequest } from 'src/app/ticket-update-request';
import { TicketUpdateresponse } from 'src/app/ticket-updateresponse';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.scss']
})
export class EditTicketComponent implements OnInit {
  @Input() ticketId! : string;
  @Input() title! : string;
  @Input() description! : string;
  @Input() status! : string;
  editForm! : FormGroup;
  isDisabled : boolean = false;
  message! : string;
  @ViewChild("modalButtonEdit") cnfBtn! : ElementRef;
  @ViewChild("closeModal") close! : ElementRef;
  @ViewChild("update") updateClose! : ElementRef;
  //editForm! : FormGroup;
  constructor(private tktApiService : TicketApiService, private updateReq : TicketUpdateRequest, private updateRes : TicketUpdateresponse, private route : Router) { }

  ngOnInit(): void {
    this.editForm = new FormGroup({
      ticketId : new FormControl({value: '', disabled: true}),
      title : new FormControl(''),
      status : new FormControl(''),
      description : new FormControl('')
    });
    this.isDisabled = true;
  }

  reload()
  {
    window.location.reload();
  }

  updateTicket(editTkt : FormGroup){
    if(editTkt.valid)
      {
        //console.log(editTkt.get('ticketId')?.value);
        this.updateReq.ticketId = editTkt.get('ticketId')?.value;
        this.updateReq.description = editTkt.get('description')?.value;
        this.updateReq.title = editTkt.get('title')?.value;
        this.updateReq.status = editTkt.get('status')?.value;

        this.tktApiService.updateTicketRequst(this.updateReq).subscribe(
          (response: TicketUpdateresponse)=>{
            if(response.isUpdated)
              {
                this.message = response.message;
                this.updateClose.nativeElement.click();
                window.location.reload();
               // this.cnfBtn.nativeElement.click();
                
              // this.route.navigateByUrl('/TicketList').then(()=>{
              //   this.route.navigate(['TicketList']);
              // });
               // this.route.navigate(['TicketList']);
              }
          },(errors) => {
            this.message = errors;
            this.cnfBtn.nativeElement.click();
          });
      }
    
  }
}


