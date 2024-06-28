import { Component } from '@angular/core';
import { SharedServiceService } from './shared-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  receivedData : any;
  title = 'TicketService';

  constructor(public sharedService: SharedServiceService, private route:Router){}

  ngOnInit(){
    this.sharedService.data$.subscribe(
      data => {
        this.receivedData = data;
      }
    )
    if(sessionStorage.getItem('userLoggedIn') !== null)
      {
        this.sharedService.setValue(true);
      }
    else{
      this.sharedService.setValue(false);
      }
  }



  LogOutUser(){
   // console.log(sessionStorage.getItem('userLoggedIn'));
    sessionStorage.clear();
    this.sharedService.setValue(false);
    this.route.navigate(['LoginUser']);
  }
}
