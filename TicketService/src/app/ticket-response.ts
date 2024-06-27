export class TicketResponse {
    ticketId! : string;
    message! : string;
    isGenerated! : boolean;

    constructor(){
        this.ticketId = "";
        this.message = "";
        this.isGenerated = false;
    }
}
