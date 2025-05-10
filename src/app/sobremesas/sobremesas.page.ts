import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sobremesas',
  templateUrl: './sobremesas.page.html',
  styleUrls: ['./sobremesas.page.scss'],
  standalone: false,

})
export class SobremesasPage implements OnInit {

  sobremesas = [
    {
      nome: 'Petit Gateau',
      valor: 35.90,
      imagem: 'assets/img/sobremesas/gateu.png',
      descricao: 'Bolo quente de chocolate com recheio cremoso e sorvete de creme.'
    },
    {
      nome: 'Mousse de Maracujá',
      valor: 22.50,
      imagem: 'assets/img/sobremesas/mousse.png',
      descricao: 'Mousse leve e cremosa com calda de maracujá natural.'
    },
    {
      nome: 'Pudim de Leite',
      valor: 18.90,
      imagem: 'assets/img/sobremesas/pudim.png',
      descricao: 'Clássico pudim brasileiro com calda de caramelo.'
    },
    {
      nome: 'Cheesecake de Frutas Vermelhas',
      valor: 26.50,
      imagem: 'assets/img/sobremesas/cheese.png',
      descricao: 'Cheesecake com cobertura de frutas vermelhas frescas.'
    },
    {
      nome: 'Torta de Limão',
      valor: 15.90,
      imagem: 'assets/img/sobremesas/torta.png',
      descricao: 'Massa crocante com recheio de limão e cobertura merengada.'
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
