import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BebidasNaoAlcoolicasPage } from './bebidas-nao-alcoolicas.page';

const routes: Routes = [
  {
    path: '',
    component: BebidasNaoAlcoolicasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BebidasNaoAlcoolicasPageRoutingModule {}
