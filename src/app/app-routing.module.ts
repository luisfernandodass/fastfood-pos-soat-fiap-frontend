import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdentificacaoClienteComponent } from './pages/identificacao-cliente/identificacao-cliente.component';
import { MenuCategoriaComponent } from './pages/menu-categoria/menu-categoria.component';
import { ResumoPedidoComponent } from './pages/resumo-pedido/resumo-pedido.component';
import { ProdutosCategoriaComponent } from './pages/produtos-categoria/produtos-categoria.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'identificacao-cliente',
    pathMatch: 'full'
  },
  {
    path: 'identificacao-cliente',
    component: IdentificacaoClienteComponent
  },
  {
    path: 'menu-categorias',
    component: MenuCategoriaComponent
  },
  {
    path: 'produtos-categoria',
    component: ProdutosCategoriaComponent
  },
  {
    path: 'resumo-pedido',
    component: ResumoPedidoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
