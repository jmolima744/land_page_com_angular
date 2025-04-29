import { Component } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'newsletter-form',
  imports: [BtnPrimaryComponent,ReactiveFormsModule],

  // ReactiveFormsModule: criação de formularios da angular com formcontrol e formgroup
  templateUrl: './newsletter-form.component.html',
  styleUrl: './newsletter-form.component.scss'
})
export class NewsletterFormComponent {
  newsletterForm!: FormGroup;

  constructor(){
    this.newsletterForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
       // FormControl: é uma classe que representa um controle de formulário, como um campo de entrada
  });

}
}
