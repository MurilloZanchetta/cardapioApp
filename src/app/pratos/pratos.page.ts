import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pratos',
  templateUrl: './pratos.page.html',
  styleUrls: ['./pratos.page.scss'],
  standalone: false,
})
export class PratosPage implements OnInit {

  pratos = [
    
    {
      nome: 'Bife Acebolado com Batata Frita',
      valor: 44.90,
      imagem: 'assets/img/pratos/prato-do-dia.jpg',
      descricao: 'Uma refeição completa e caseira com arroz soltinho, feijão fresquinho, bife suculento coberto com cebola, batata frita crocante e salada leve. Sabor e tradição.',

    },
    {
      nome: 'Frango grelhado com legumes',
      valor: 42.50,
      imagem: 'assets/img/pratos/grelhado2.png',
      descricao: 'Peito de frango grelhado acompanhado de legumes no vapor e arroz branco.',
    },
    {
      nome: 'Strogonoff de Carne',
      valor: 45.00,
      imagem: 'assets/img/pratos/strogonoff.png',
      descricao: 'Strogonoff de carne bovina com arroz branco e batata palha.'
    },
    {
      nome: 'Feijoada',
      valor: 69.99,
      imagem: 'assets/img/pratos/feijoada.png',
      descricao: 'Tradicional feijoada brasileira com arroz, couve, farofa e laranja.'
    },
    {
      nome: 'Peixe ao Molho de Camarão',
      valor: 99.90,
      imagem: 'assets/img/pratos/peixe.png',
      descricao: 'Filé de peixe com molho de camarão, arroz e purê de batatas.'
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