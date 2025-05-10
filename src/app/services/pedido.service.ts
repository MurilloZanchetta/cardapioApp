import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  itens: any[] = [];

  adicionar(item: any) {
    this.itens.push(item);
  }

  listar() {
    return this.itens;
  }

  limpar() {
    this.itens = [];
  }

  total() {
    return this.itens.reduce((soma, item) => soma + item.valor, 0);
  }
}
