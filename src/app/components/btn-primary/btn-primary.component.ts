import { Component,Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';

type BtnVariants = 'primary' | 'secondary';

@Component({
  selector: 'app-btn-primary',
  imports: [],
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
