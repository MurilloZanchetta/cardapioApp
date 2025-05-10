import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  constructor(private router: Router) {}

  abrirCategoria(caminho: string) {
    this.router.navigate([`/${caminho}`]);
  }

  pratoDoDia = {
  nome: 'Prato do Dia',
  valor: 29.90,
  imagem: 'assets/img/prato-do-dia.jpg',
  descricao: 'Uma refeição completa e caseira com arroz soltinho, feijão fresquinho, bife suculento coberto com cebola, batata frita crocante e salada leve. Sabor e tradição por apenas R$ 29,90!'
  };

  verDetalhes(item: any) {
    this.router.navigate(['/detalhes'], { state: { item } });
  }

  abrirPedido() {
    this.router.navigate(['/pedido']);
  }

}
