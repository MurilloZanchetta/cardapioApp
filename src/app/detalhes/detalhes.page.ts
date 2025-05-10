import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
  standalone: false,
})
export class DetalhesPage implements OnInit {
  item: any;

  constructor(private router: Router, private toastController: ToastController) {}

  ngOnInit() {
    this.item = history.state.item;
  }

  async adicionarAoPedido() {
    const toast = await this.toastController.create({
      message: `✔️ ${this.item.nome} adicionado ao pedido! Total: R$ ${this.item.valor.toFixed(2)}`,
      duration: 2500,
      color: 'success',
      position: 'bottom',
    });
    toast.present();
  }
}
