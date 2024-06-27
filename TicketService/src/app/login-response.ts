export class LoginResponse {
    UserId! : string;
    fullName! : string;
    response! : string;
    success! : boolean;

    constructor()
    {
        this.UserId = "";
        this.fullName ="";
        this.response ="";
        this.success = false;
    }
}
