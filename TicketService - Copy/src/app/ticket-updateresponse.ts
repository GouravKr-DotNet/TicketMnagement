export class TicketUpdateresponse {
    ticketId! : string;
    isUpdated!: boolean;
    message! : string;

    constructor(){
        this.ticketId = "";
        this.isUpdated = false;
        this.message = "";
    }
}
