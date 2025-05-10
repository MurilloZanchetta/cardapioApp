import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PedidoService } from '../services/pedido.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
  standalone: false,
})
export class DetalhesPage implements OnInit {
  item: any;

  constructor(
    private router: Router,
    private toastController: ToastController,
    private pedidoService: PedidoService
  ) {}

  ngOnInit() {
    this.item = history.state.item;
  }

  async adicionarAoPedido() {
    this.pedidoService.adicionar(this.item);

    const toast = await this.toastController.create({
      message: `✔️ ${this.item.nome} adicionado ao pedido! Total: R$ ${this.pedidoService
        .total()
        .toFixed(2)
        .replace('.', ',')}`,
      duration: 2500,
      color: 'success',
      position: 'bottom',
    });

    toast.present();
  }
}
