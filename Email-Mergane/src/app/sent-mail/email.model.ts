export class Email{
    email: string;
    oggetto: string;
    testo: string;

    constructor(email: string, oggetto: string, testo:string){
        this.email = email
        this.oggetto = oggetto
        this.testo = testo
    }
}