import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './user-module/registration/registration.component';
import { LogInUserComponent } from './user-module/log-in-user/log-in-user.component';
import { TicketGridComponent } from './tickets-portal/ticket-grid/ticket-grid.component';
import { NewTicketComponent } from './tickets-portal/new-ticket/new-ticket.component';
import { CheckUserAuthGuard } from './check-user-auth.guard';

const routes: Routes = [
  {path:"registration", component: RegistrationComponent},
  {path:"LoginUser", component: LogInUserComponent},
  {path:"TicketList", component: TicketGridComponent, canActivate: [CheckUserAuthGuard]},
  {path:"ticketForm", component: NewTicketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
