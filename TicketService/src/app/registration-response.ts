export class RegistrationResponse {
    userName! : string;
    fullName! : string;
    role! : string;
    message! : string;
    isRegistered! : boolean;

    constructor(){
        this.fullName = "";
        this.message = "";
        this.role = "";
        this.userName = "";
        this.isRegistered = false;
    }
}
