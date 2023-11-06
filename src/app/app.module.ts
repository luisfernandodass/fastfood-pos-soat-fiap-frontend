import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdentificacaoClienteComponent } from './pages/identificacao-cliente/identificacao-cliente.component';
import { MenuCategoriaComponent } from './pages/menu-categoria/menu-categoria.component';
import { ItemCategoriaComponent } from './pages/menu-categoria/item-categoria/item-categoria.component';
import { ProdutosCategoriaComponent } from './pages/produtos-categoria/produtos-categoria.component';
import { ItemProdutoComponent } from './shared/components/item-produto/item-produto.component';
import { ResumoPedidoComponent } from './pages/resumo-pedido/resumo-pedido.component';
import { ConfirmacaoPedidoComponent } from './pages/confirmacao-pedido/confirmacao-pedido.component';
import { StatusPedidoComponent } from './pages/status-pedido/status-pedido.component';
import { AlertaPedidoProntoComponent } from './pages/status-pedido/alerta-pedido-pronto/alerta-pedido-pronto.component';
import { CelulaInputComponent } from './pages/identificacao-cliente/celula-input/celula-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProdutosSubCategoriaComponent } from './pages/produtos-categoria/produtos-sub-categoria/produtos-sub-categoria.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    IdentificacaoClienteComponent,
    MenuCategoriaComponent,
    ItemCategoriaComponent,
    ProdutosCategoriaComponent,
    ItemProdutoComponent,
    ResumoPedidoComponent,
    ConfirmacaoPedidoComponent,
    StatusPedidoComponent,
    AlertaPedidoProntoComponent,
    CelulaInputComponent,
    ProdutosSubCategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
