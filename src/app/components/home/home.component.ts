import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  // referencia do componente em outro componente
  imports: [HeaderComponent,NgOptimizedImage],
  // coisas que vão ser necessarias para o uso 
  templateUrl: './home.component.html',
  // arquivo html que vai ser renderizado 
  styleUrl: './home.component.scss'
  // arquivo de estilo que vai ser renderizado
})
export class HomeComponent {

}
// sendo um standalone, sendo que neste caso esta sendo utilizado o decorator @Component
// o decorator @Component é utilizado para definir um componente Angular

// // module anterior  - arquivo que declara tudo que importa e exporta, arquivamento  a + e complicação no processo


