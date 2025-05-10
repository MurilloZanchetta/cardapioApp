import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../services/pedido.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
  standalone: false,
})
export class PedidoPage implements OnInit {
  pedido: any[] = [];
  total = 0;

  constructor(private pedidoService: PedidoService) {}

  ngOnInit() {
    this.pedido = this.pedidoService.listar();
    this.total = this.pedidoService.total();
  }
}
