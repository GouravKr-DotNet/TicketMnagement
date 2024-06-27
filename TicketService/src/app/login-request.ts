export class LoginRequest {
    UserId! : string;
    Password! : string;

    constructor()
    {
        this.UserId = "";
        this.Password ="";
    }
}
