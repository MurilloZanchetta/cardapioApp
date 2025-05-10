import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BebidasNaoAlcoolicasPageRoutingModule } from './bebidas-nao-alcoolicas-routing.module';

import { BebidasNaoAlcoolicasPage } from './bebidas-nao-alcoolicas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BebidasNaoAlcoolicasPageRoutingModule
  ],
  declarations: [BebidasNaoAlcoolicasPage]
})
export class BebidasNaoAlcoolicasPageModule {}
