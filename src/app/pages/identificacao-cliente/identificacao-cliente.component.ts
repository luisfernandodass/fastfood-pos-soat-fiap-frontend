import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, delay, filter, map, of, range } from 'rxjs';
import { IdentificacaoClienteService } from 'src/app/shared/services/identificacao-cliente.service';
import { QNTD_DIGITOS_CPF } from 'src/app/shared/utils/constant';
import { isNotNullUndefinedEmpty } from 'src/app/shared/utils/utils';

@Component({
  selector: 'app-identificacao-cliente',
  templateUrl: './identificacao-cliente.component.html',
  styleUrls: ['./identificacao-cliente.component.scss']
})
export class IdentificacaoClienteComponent {
  quantidadeDigitos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  qntdDigitosCPFValida = false;

  cpf: string[] = [];

  showLoadingButton = false;

  constructor(private router: Router, private identificacaoClienteService: IdentificacaoClienteService) {}

  verificarValidadeDoForm(digito: string | null): void {
    if (isNotNullUndefinedEmpty(digito)) {
      this.qntdDigitosCPFValida = false;
      this.cpf.pop();
    } else {
      if (this.cpf.length !== QNTD_DIGITOS_CPF) {
        this.focusNextInputCelula();
        this.cpf.push(digito);
        this.qntdDigitosCPFValida = false;
      } 

      if (this.cpf.length === QNTD_DIGITOS_CPF) {
        this.qntdDigitosCPFValida = true;
      }
    }
  }

  validarCPF(): void {
    this.showLoadingButton = true;
    this.identificacaoClienteService.validarCPF(this.cpf.join(''))
    .subscribe({
      next: () => {
        this.router.navigateByUrl('menu-categorias');
      },
      error: () => {

      },
      complete: () => {
        this.showLoadingButton = false;
      },
    });
  }

  private focusNextInputCelula(): void {
    if (this.cpf.length !== 10) {
      document.getElementById(`celula-input-cpf-${this.cpf.length + 1}`).focus();
    }
  }
}
