import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.page.html',
  styleUrls: ['./entradas.page.scss'],
  standalone: false,
})
export class EntradasPage implements OnInit {

  entradas = [
    {
      nome: 'Bruschetta',
      valor: 22.90,
      imagem: 'assets/img/entradas/bruschetta.png',
      descricao: 'Pão italiano com tomate, manjericão e azeite.'
    },
    {
      nome: 'Mini Cestinha de Queijo',
      valor: 14.50,
      imagem: 'assets/img/entradas/cesta.png',
      descricao: 'Cestinha crocante recheada com queijo derretido.'
    },
    {
      nome: 'Camarão Empanado',
      valor: 54.90,
      imagem: 'assets/img/entradas/camarao.png',
      descricao: 'Camarões empanados servidos com molho tártaro.'
    },
    {
      nome: 'Bolinho de Bacalhau',
      valor: 19.90,
      imagem: 'assets/img/entradas/bolinho.png',
      descricao: 'Clássico bolinho de bacalhau com tempero da casa.'
    },
    {
      nome: 'Anéis de Lula',
      valor: 59.99,
      imagem: 'assets/img/entradas/aneis.png',
      descricao: 'Lulas empanadas servidas com molho especial.'
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
