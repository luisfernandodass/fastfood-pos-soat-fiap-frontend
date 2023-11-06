import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-categoria',
  templateUrl: './item-categoria.component.html',
  styleUrls: ['./item-categoria.component.scss']
})
export class ItemCategoriaComponent {
  @Input() tituloCategoria: string = '';
  @Input() pathImg: string = '';

  constructor(private router: Router) {}

  navegarParaProdutoCategoria(): void{
    this.router.navigateByUrl('/produtos-categoria');
  }
}
