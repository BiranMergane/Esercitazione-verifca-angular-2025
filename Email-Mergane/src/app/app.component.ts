import { Component } from '@angular/core';
import { Email } from './sent-mail/email.model';
import { SentMailComponent } from './sent-mail/sent-mail.component';

@Component({
  selector: 'app-root',
  imports: [SentMailComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'email-mergane';
  emails: Email[];

  constructor() {
    this.emails = [
      new Email("b.mergane2007@gmail.com", "Pokèmon", "Qual'è il tuo pokèmon preferito?"),
      new Email("mergane.biran@iisgalvanimi.edu.it", "Modifica voto importantissima!", "Prof. Malizia mi deve assolutamente mettere 9.6 invece che 9.3!"),
      new Email("boh@gmail.com", "Boh", "Boh vedi te")
    ];
  }

  aggiungiMail(email: HTMLInputElement, oggetto: HTMLInputElement, testo: HTMLInputElement) {
    if (email.value && oggetto.value && testo.value) {
      this.emails.push(new Email(email.value, oggetto.value, testo.value));
      console.log("Nuova email aggiunta:", email.value, oggetto.value, testo.value);
      email.value = '';
      oggetto.value = '';
      testo.value = '';
    } else {
      alert('Per favore, compila tutti i campi!');
    }
  }
}
