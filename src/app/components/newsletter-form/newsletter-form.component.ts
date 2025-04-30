import { Component } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewsletterService } from '../../services/newsletter.service';

@Component({
  selector: 'newsletter-form',
  imports: [BtnPrimaryComponent,ReactiveFormsModule],
  providers:[NewsletterService], // Injetando o serviço no componente
  // ReactiveFormsModule: criação de formularios da angular com formcontrol e formgroup
  templateUrl: './newsletter-form.component.html',
  styleUrl: './newsletter-form.component.scss'
})
export class NewsletterFormComponent {
  newsletterForm!: FormGroup;
  loading = { set: (value: boolean) => console.log('Loading:', value) }; // Mock implementation of loading

  constructor(private service: NewsletterService) { // Injetando o serviço no construtor
    // O serviço é injetado no construtor do componente, permitindo que o componente utilize os métodos e propriedades do serviço.
    this.newsletterForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
       // FormControl: é uma classe que representa um controle de formulário, como um campo de entrada
  });

}


onSubmit(){
  this.loading.set(true);
  // this.loading.set(true): seta o loading para true
  // console.log(this.newsletterForm.value);
  // this.newsletterForm.value: retorna o valor do formulario
  if(this.newsletterForm.valid){
    this.service.sendDate(this.newsletterForm.value.name, this.newsletterForm.value.email).subscribe({
      next:(response) => {
       this.newsletterForm.reset();
       this.loading.set(false);
        // this.newsletterForm.reset(): reseta o formulario
      },
      error:(error) => {
        console.error(error);
      }
    });
}

}

}
