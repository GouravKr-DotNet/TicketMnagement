export class TicketsList {
    ticketId! : string;
    userId! : string;
    title! : string;
    description! : string;
    status! : string;
    createdOn! : string;
    updatedOn! : string;
    
    constructor(){
        this.ticketId = "";
        this.userId = "";
        this.title = "";
        this.description = "";
        this.status = "";
        this.createdOn = "";
        this.updatedOn = "";
    }
}
