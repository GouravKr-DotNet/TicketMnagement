import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TicketRequest } from '../ticket-request';
import { SplitPipePipe } from '../split-pipe.pipe';
import { TicketUpdateRequest } from '../ticket-update-request';
import { TicketUpdateresponse } from '../ticket-updateresponse';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers:[TicketRequest,SplitPipePipe,TicketUpdateRequest,TicketUpdateresponse]
})
export class TicketsPortalModule { }
