import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  private endpoint = 'https://faed47pcwb7biktidlecuafuty0aegep.lambda-url.us-east-1.on.aws/'; // URL do endpoint da API temporaria

  constructor(private http:HttpClient) { }

  sendDate(name: string, email:string): Observable<NewsletterResponse>{
    const data = {name,email};

    return this.http.post<NewsletterResponse>(this.endpoint,data);
  }
}

// (signals - notificação quando o valor dessa variavel efetuar mudanças)

// Observable: é um padrão de programação reativa que permite trabalhar com fluxos de dados assíncronos.
// O Observable é uma abstração que representa uma coleção de valores ou eventos futuros.
// Ele pode ser usado para lidar com eventos, requisições HTTP, entre outros.
//