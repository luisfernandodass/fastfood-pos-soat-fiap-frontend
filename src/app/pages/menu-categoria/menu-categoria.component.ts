import { Component } from '@angular/core';
import { ICategoria } from 'src/app/shared/interfaces/categoria';
import { CATEGORIAS } from 'src/app/shared/mocks/categorias';

@Component({
  selector: 'app-menu-categoria',
  templateUrl: './menu-categoria.component.html',
  styleUrls: ['./menu-categoria.component.scss']
})
export class MenuCategoriaComponent {
  categorias: ICategoria[] = CATEGORIAS;
}
