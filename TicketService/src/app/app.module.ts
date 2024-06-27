import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModuleModule } from './user-module/user-module.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LogInUserComponent } from './user-module/log-in-user/log-in-user.component';
import { TicketGridComponent } from './tickets-portal/ticket-grid/ticket-grid.component';
import { TicketsPortalModule } from './tickets-portal/tickets-portal.module';
import { NewTicketComponent } from './tickets-portal/new-ticket/new-ticket.component';
import { RegistrationComponent } from './user-module/registration/registration.component';
import { SplitPipePipe } from './split-pipe.pipe';
import { EditTicketComponent } from './edit-ticket/edit-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInUserComponent,
    TicketGridComponent,
    NewTicketComponent,
    RegistrationComponent,
    SplitPipePipe,
    EditTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModuleModule,
    ReactiveFormsModule,
    TicketsPortalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
