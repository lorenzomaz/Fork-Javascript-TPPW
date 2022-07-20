import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //@ViewChild('mioForm') formReg: NgForm

  domandaDefault = 'animale';
  risposta: string = '';
  utente: {
    name: string;
    email: string;
    secretAnsw: string
  }

  onSubmit(form: NgForm){
    console.log("Submitted");
    console.log(form);
    console.log(form.form.value);
    this.utente.name = form.form.value.nome

  }

  // Oppure il form può essere gestito con il decorator @ViewChild()

  // onSubmit(){
  //   console.log(this.formReg);

  // }
}
