export class RegistrationRequest {
    userName! : string;
    password! : string;
    fullName! : string;
    role!: string;

    constructor()
    {
        this.fullName="";
        this.password="";
        this.userName="";
        this.role="";
    }
}

