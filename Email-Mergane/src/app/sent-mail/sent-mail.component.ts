import { Component, Input,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Email} from "./email.model";

@Component({
  selector: 'app-sent-mail',
  imports: [CommonModule],
  templateUrl: './sent-mail.component.html',
  styleUrl: './sent-mail.component.css'
})
export class SentMailComponent implements OnInit {
  @Input() singola_mail:Email
  buttone_clk: boolean = true;
  txt_bottone: string = "Chiudi"
  colore: string = "white"
  constructor(){
    this.singola_mail = new Email("", "", "")
  }

  chiudi_espandi(){
    this.buttone_clk = !this.buttone_clk 
    this.txt_bottone = this.buttone_clk ? "Chiudi" : "Espandi"
    return false
  }

  speciale(){
    console.log("Ciao")
    if(this.colore === "white"){
      this.colore = "yellow"
    }else{
      this.colore = "white"
    }
  }

  ngOnInit(){}
}