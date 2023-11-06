import { Component, OnInit } from '@angular/core';
import { PRODUTOS_CATEGORIA_SALGADO_MOCK } from 'src/mocks/produtosCategoria';

@Component({
  selector: 'app-produtos-categoria',
  templateUrl: './produtos-categoria.component.html',
  styleUrls: ['./produtos-categoria.component.scss']
})
export class ProdutosCategoriaComponent implements OnInit {

  produtosSubCategoria;

  ngOnInit(): void {
    this.produtosSubCategoria = PRODUTOS_CATEGORIA_SALGADO_MOCK;
  }
}
