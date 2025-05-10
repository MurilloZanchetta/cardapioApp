import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.page.html',
  styleUrls: ['./bebidas.page.scss'],
  standalone: false
})
export class BebidasPage {

  bebidas = [
    {
      nome: 'Caipirinha',
      valor: 18.90,
      imagem: 'assets/img/bebidas/caipirinha.png',
      descricao: 'Cachaça, limão e açúcar. A clássica bebida brasileira.'
    },
    {
      nome: 'Margarita',
      valor: 22.00,
      imagem: 'assets/img/bebidas/margarita.png',
      descricao: 'Tequila, licor de laranja e suco de limão.'
    },
    {
      nome: 'Gin Tônica',
      valor: 24.50,
      imagem: 'assets/img/bebidas/gin.png',
      descricao: 'Gin premium com água tônica e limão.'
    },
    {
      nome: 'Mojito',
      valor: 20.00,
      imagem: 'assets/img/bebidas/mojito.png',
      descricao: 'Rum, hortelã, açúcar e limão.'
    },
    {
      nome: 'Cerveja Artesanal',
      valor: 16.00,
      imagem: 'assets/img/bebidas/cerveja.png',
      descricao: 'Cerveja artesanal brasileira gelada.'
    }
  ];

  constructor(private router: Router) {}

  verDetalhes(item: any) {
    this.router.navigate(['/detalhes'], {
      state: { item }
    });
  }
}
