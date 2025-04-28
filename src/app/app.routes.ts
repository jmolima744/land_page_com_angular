import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
{
    path: "",
    component: HomeComponent
}
];

// controle de rota da aplicação 
// module  - arquivo que declara tudo que importa e exporta, arquivamento  a + e complicação no processo
// sendo que se colocar a rota por aqui não tem necessidade para a colocação de rotas no app.component.html
// pois servira as rotas que foram declaradas no app.routes.ts - sendo que foi passada a rota.





