import { CommonModule } from '@angular/common';
import { Component,Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';

type BtnVariants = 'primary' | 'secondary';

@Component({
  selector: 'btn-primary',
  imports: [CommonModule],
  // sendo que o CommonModule é o módulo que contém as diretivas comuns do Angular, como ngIf, ngFor, etc.
  // sendo que como ele esta sendo utilizado, ele precisa ser importado
  // sendo que o @if foi introduzido no angular 17, sendo uma outra forma de efetuar o controle de fluxo
  templateUrl: './btn-primary.component.html',
  styleUrl: './btn-primary.component.scss'
})
export class BtnPrimaryComponent {
  @Input("btn-text") btnText: string = "";
  @Output("submit") onSubmit = new EventEmitter();
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() variant: BtnVariants = "primary"

  submit(){
    this.onSubmit.emit();
  }

}
