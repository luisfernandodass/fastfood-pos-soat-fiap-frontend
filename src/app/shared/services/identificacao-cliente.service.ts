import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { delay } from 'rxjs/internal/operators/delay';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class IdentificacaoClienteService {

  constructor() { }

  validarCPF(cpf: string): Observable<any> {
    const obs = new Observable((sub) => {
      sub.next(cpf);
      sub.complete();
    });
    return obs.pipe(delay(2000), map(res => res));
  }
}
