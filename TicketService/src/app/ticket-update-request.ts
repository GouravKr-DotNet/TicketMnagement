export class TicketUpdateRequest {
    ticketId! : string;
    title! : string;
    description! : string;
    status! : string;

    constructor(){
        this.description = "";
        this.status = "";
        this.ticketId = "";
        this.title = "";
    }
}
