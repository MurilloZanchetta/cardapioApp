import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lanches',
  templateUrl: './lanches.page.html',
  styleUrls: ['./lanches.page.scss'],
  standalone: false,
})
export class LanchesPage implements OnInit {

  lanches = [
    {
      nome: 'X-Burguer Clássico',
      valor: 20.99,
      imagem: 'assets/img/lanches/xburguer-classico.jpg',
      descricao: 'Hambúrguer artesanal com queijo e molho especial.'
    },
    {
      nome: 'X-Bacon',
      valor: 25.59,
      imagem: 'assets/img/lanches/xbacon.png',
      descricao: 'Hambúrguer com bacon crocante e queijo cheddar.'
    },
    {
      nome: 'X-Salada',
      valor: 19.99,
      imagem: 'assets/img/lanches/xsalada.png',
      descricao: 'Sanduíche com alface, tomate, queijo e hambúrguer.'
    },
    {
      nome: 'Cheddar Duplo',
      valor: 32.00,
      imagem: 'assets/img/lanches/duplo-cheddar.png',
      descricao: 'Dois hambúrgueres com queijo cheddar cremoso.'
    },
    {
      nome: 'Vegetariano',
      valor: 17.92,
      imagem: 'assets/img/lanches/vegetariano.png',
      descricao: 'Hambúrguer de grão-de-bico com salada fresca.'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  verDetalhes(item: any) {
    this.router.navigate(['/detalhes'], {
      state: { item }
    });
  }

}
