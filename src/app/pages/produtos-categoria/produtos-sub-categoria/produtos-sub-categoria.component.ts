import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos-sub-categoria',
  templateUrl: './produtos-sub-categoria.component.html',
  styleUrls: ['./produtos-sub-categoria.component.scss']
})
export class ProdutosSubCategoriaComponent implements OnInit {
  @Input() productsSubCategoria;

  ngOnInit(): void {
    console.log('', this.productsSubCategoria)
  }
}
