import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bebidas-nao-alcoolicas',
  templateUrl: './bebidas-nao-alcoolicas.page.html',
  styleUrls: ['./bebidas-nao-alcoolicas.page.scss'],
  standalone: false
})
export class BebidasNaoAlcoolicasPage {

  bebidas = [
    {
      nome: 'Suco de Laranja Natural',
      valor: 11.50,
      imagem: 'assets/img/bebidas-nao-alcoolicas/suco.png',
      descricao: 'Suco natural de laranja feito na hora.'
    },
    {
      nome: 'Refrigerante',
      valor: 9.00,
      imagem: 'assets/img/bebidas-nao-alcoolicas/soda.png',
      descricao: 'Lata gelada. Escolha entre Coca-Cola, Guaraná ou Fanta.'
    },
    {
      nome: 'Água Mineral com Gás',
      valor: 8.00,
      imagem: 'assets/img/bebidas-nao-alcoolicas/gas.png',
      descricao: 'Água com gás gelada.'
    },
    {
      nome: 'Água Mineral sem Gás',
      valor: 6.50,
      imagem: 'assets/img/bebidas-nao-alcoolicas/agua.png',
      descricao: 'Água natural sem gás.'
    },
    {
      nome: 'Chá Gelado',
      valor: 10.99,
      imagem: 'assets/img/bebidas-nao-alcoolicas/cha.png',
      descricao: 'Chá gelado de limão ou pêssego.'
    }
  ];

  constructor(private router: Router) {}

  verDetalhes(item: any) {
    this.router.navigate(['/detalhes'], {
      state: { item }
    });
  }
}
