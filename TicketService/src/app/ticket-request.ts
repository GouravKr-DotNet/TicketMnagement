export class TicketRequest {
    UserId! : string;
    Title! : string;
    Description! : string;
    Status! : string;

    constructor()
    {
        this.UserId = "";
        this.Description = "";
        this.Status ="";
        this.Title = "";
    }
}
